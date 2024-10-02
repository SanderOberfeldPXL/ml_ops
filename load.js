let faceMatcher
let descriptions1
let descriptions2

// all labels
const labels = ['ArnoBarzan','SamVanderstraeten', 'SamVanRijn']

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/models')
]).then(start)


async function start(){

    const labeledFaceDescriptors = await loadLabeledImages()

    // assign label when 60% sure
    faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)

    console.log('loaded')
}

function loadLabeledImages() {
    return Promise.all(
      // go through all the labels/directories
      labels.map(async label => {
        const descriptions = []
        // each directory has 3 images: finds each image in the directory, finds 1 face in each image, finds the face descriptions of said image & adds the to the descriptions array
        for (let i = 1; i <= 3; i++) {
          const img = await faceapi.fetchImage(`/labeled_images/${label}/${i}.png`)
          const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
          descriptions.push(detections.descriptor)
        }
        // returns the name of the person, and the face descriptions of each test image
        return new faceapi.LabeledFaceDescriptors(label, descriptions)
      })
    )
  }

export function testFunction (){
    console.log('test')
}

export async function getDistance(image1, image2){
    // convert file to image used for faceapi
    let convertedImage1 = await faceapi.bufferToImage(image1)
    let convertedImage2 = await faceapi.bufferToImage(image2)

    descriptions1 = await faceapi.detectSingleFace(convertedImage1).withFaceLandmarks().withAgeAndGender().withFaceDescriptor()
    descriptions2 = await faceapi.detectSingleFace(convertedImage2).withFaceLandmarks().withAgeAndGender().withFaceDescriptor()
  
    //find best match above 60%
    const result1 = faceMatcher.findBestMatch(descriptions1.descriptor).toString()
    const result2 = faceMatcher.findBestMatch(descriptions2.descriptor).toString()
    
    // assign only the name of the face in each picture, not how sure the ai is. If the name is not in the list / < 60% sure --> label = "unknown"
    const label1 = result1.split(' ')[0]
    const label2 = result2.split(' ')[0]

    return calculateDistance(label1, label2)
}

function calculateDistance (label1, label2){
    let distance

    if(descriptions1.age < 21 || descriptions2.age < 21){
    // at least 1 face in either picture is estimated < 21 years old
    distance = 2
    } else if(labels.includes(label1) && labels.includes(label2)){
    // both pictures contain someone from the labels array
    if( label1 == label2){
        // image1 & image2 contain the same person
        distance = 0
    } else {
        // image1 & image2 contain ddifferen AI teachers => 100% match
        distance = 1
    }
    } else {
    // calculate distance between the face descriptors of each image
    distance = faceapi.euclideanDistance(descriptions1.descriptor, descriptions2.descriptor)
    // rescale distance to be more accurate for the love meter
    distance = (distance - .3) * 1.4
    }

    if(distance < 0){
        distance = 0
    }

    // set percentage to 2 decimals
    return Math.round(distance * 10000) / 100
}