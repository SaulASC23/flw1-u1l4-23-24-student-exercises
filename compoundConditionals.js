// Scenario:
// You're building an application for a movie streaming platform. The platform 
// wants to recommend movies based on the user's mood and the time of day.


// Change these values to test different scenarios
let m = "sad";        // Possible values: "happy", "sad", "excited", "bored"
let t = "night"; // Possible values: "morning", "afternoon", "evening", "night"

let rM;

// 1. Implement the recommendation logic using compound conditionals
// - If the user is "tired" OR it's "night", recommend "Relaxing Ambient Film".
// - If the user is "excited" AND it's NOT "morning", recommend "High-Octane Thriller".
// - If the user is "bored" AND it's "afternoon" OR "happy" AND it's "evening", recommend "Engaging Mystery Film".
// - In all other cases, recommend "Popular Choice Film".
if (m === "tired" || t === "night"){
  rM = "Relaxing Ambient Film";
}
else if(m === "excited" && t !== "morning"){
  rM = "High-Octane Thriller";
}
else if((m === "bored" && t === "afternoon") || (m === "happy" && t === "evening")) {
  rM = "Engaging Mystery Film";
}
else{
  rM === "Popular Choice Film";
}



// 2. Console log the recommended movie
console.log(rM);