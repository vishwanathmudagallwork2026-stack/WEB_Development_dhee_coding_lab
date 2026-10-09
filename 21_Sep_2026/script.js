//write a program to array of apple, banana, pinapple, and mango, grapes, orange, reversed the array return in new array.
//
//
//

// let Revarr =[]
// for (let i = fruits.length-1; i>=0; i--){
//     revArr.push(fruits(i))
// }

// //write a program to reverse the fruits index whi
// //
// let new_arr = []
// for(let i = 0; i<fruits.length; i++){
//     if(i % 2 == 0){
//         let str = ""
//         for(let j = 0; fruits[i].length-1; j>=0;   j--){
//             str += (fruits[i][j])
//         }
//         new_arr.push(str)

//     }
//     else{
//         new_arr.push(fruits[i])
//     }
// }
// console.log(new_arr)

// let fruits1 = ["apple", "mango", "banana", "grapes", "pineapple", "orange"]

//[Apple, mANGO, Banana, gRAPES, PineapplE, ORANGe]

// for (let i = 0; i < fruits1.length; i++) {
//   if (i % 2 == 0) {
//     // console.log(fruits1[i])
//     for (let j = 0; j < fruits1[i].length; j++) {
//       console.log(fruits1[i][j]);
//       if (j === 0 && j.length) {
//         console.log(object);
//       }
//     }
//   }
// }

//write a program
// [ApPlE, mAnGo, BaNaNa, GrApEs, pInEaPpLe]

const employees = [
  {
    empId: "EMP001",
    empName: "Aarav Sharma",
    empDesignation: "Software Engineer",
    empContact: "+91 9876543210",
    empAddress: { city: "Bengaluru", state: "Karnataka", pincode: "560001" },
  },
  {
    empId: "EMP002",
    empName: "Priya Patel",
    empDesignation: "Product Manager",
    empContact: "+91 9876543211",
    empAddress: { city: "Ahmedabad", state: "Gujarat", pincode: "380001" },
  },
  {
    empId: "EMP003",
    empName: "Rohan Verma",
    empDesignation: "UI/UX Designer",
    empContact: "+91 9876543212",
    empAddress: { city: "Mumbai", state: "Maharashtra", pincode: "400001" },
  },
  {
    empId: "EMP004",
    empName: "Ananya Iyer",
    empDesignation: "Data Analyst",
    empContact: "+91 9876543213",
    empAddress: { city: "Chennai", state: "Tamil Nadu", pincode: "600001" },
  },
  {
    empId: "EMP005",
    empName: "Vikram Singh",
    empDesignation: "DevOps Engineer",
    empContact: "+91 9876543214",
    empAddress: { city: "Jaipur", state: "Rajasthan", pincode: "302001" },
  },
  {
    empId: "EMP006",
    empName: "Neha Das",
    empDesignation: "HR Manager",
    empContact: "+91 9876543215",
    empAddress: { city: "Kolkata", state: "West Bengal", pincode: "700001" },
  },
  {
    empId: "EMP007",
    empName: "Manoj Kumar",
    empDesignation: "Backend Developer",
    empContact: "+91 9876543216",
    empAddress: { city: "Patna", state: "Bihar", pincode: "800001" },
  },
  {
    empId: "EMP008",
    empName: "Divya Nair",
    empDesignation: "QA Engineer",
    empContact: "+91 9876543217",
    empAddress: { city: "Kochi", state: "Kerala", pincode: "682001" },
  },
  {
    empId: "EMP009",
    empName: "Rahul Reddy",
    empDesignation: "Frontend Developer",
    empContact: "+91 9876543218",
    empAddress: { city: "Hyderabad", state: "Telangana", pincode: "500001" },
  },
  {
    empId: "EMP010",
    empName: "Simran Kaur",
    empDesignation: "Marketing Specialist",
    empContact: "+91 9876543219",
    empAddress: { city: "Chandigarh", state: "Punjab", pincode: "160001" },
  },
  {
    empId: "EMP011",
    empName: "Amit Joshi",
    empDesignation: "Full Stack Developer",
    empContact: "+91 9876543220",
    empAddress: { city: "Lucknow", state: "Uttar Pradesh", pincode: "226001" },
  },
  {
    empId: "EMP012",
    empName: "Pooja Hegde",
    empDesignation: "Business Analyst",
    empContact: "+91 9876543221",
    empAddress: { city: "Mangaluru", state: "Karnataka", pincode: "575001" },
  },
  {
    empId: "EMP013",
    empName: "Karan Malhotra",
    empDesignation: "Cloud Architect",
    empContact: "+91 9876543222",
    empAddress: { city: "New Delhi", state: "Delhi", pincode: "110001" },
  },
  {
    empId: "EMP014",
    empName: "Sneha Roy",
    empDesignation: "Content Writer",
    empContact: "+91 9876543223",
    empAddress: { city: "Guwahati", state: "Assam", pincode: "781001" },
  },
  {
    empId: "EMP015",
    empName: "Abhishek Sen",
    empDesignation: "Security Engineer",
    empContact: "+91 9876543224",
    empAddress: { city: "Bhubaneswar", state: "Odisha", pincode: "751001" },
  },
  {
    empId: "EMP016",
    empName: "Meera Menon",
    empDesignation: "Scrum Master",
    empContact: "+91 9876543225",
    empAddress: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      pincode: "695001",
    },
  },
  {
    empId: "EMP017",
    empName: "Tarun Bajaj",
    empDesignation: "System Administrator",
    empContact: "+91 9876543226",
    empAddress: {
      city: "Shimla",
      state: "Himachal Pradesh",
      pincode: "171001",
    },
  },
  {
    empId: "EMP018",
    empName: "Geeta Rao",
    empDesignation: "Finance Manager",
    empContact: "+91 9876543227",
    empAddress: {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      pincode: "530001",
    },
  },
  {
    empId: "EMP019",
    empName: "Siddharth Chawla",
    empDesignation: "AI Engineer",
    empContact: "+91 9876543228",
    empAddress: { city: "Gurugram", state: "Haryana", pincode: "122001" },
  },
  {
    empId: "EMP020",
    empName: "Deepika Kulkarni",
    empDesignation: "Database Administrator",
    empContact: "+91 9876543229",
    empAddress: { city: "Pune", state: "Maharashtra", pincode: "411001" },
  },
  {
    empId: "EMP021",
    empName: "Manish Pandey",
    empDesignation: "Software Architect",
    empContact: "+91 9876543230",
    empAddress: { city: "Indore", state: "Madhya Pradesh", pincode: "452001" },
  },
  {
    empId: "EMP022",
    empName: "Swati Ghosh",
    empDesignation: "Graphic Designer",
    empContact: "+91 9876543231",
    empAddress: { city: "Siliguri", state: "West Bengal", pincode: "734001" },
  },
  {
    empId: "EMP023",
    empName: "Nikhil Thakur",
    empDesignation: "Operations Head",
    empContact: "+91 9876543232",
    empAddress: { city: "Dehradun", state: "Uttarakhand", pincode: "248001" },
  },
  {
    empId: "EMP024",
    empName: "Pallavi Joshi",
    empDesignation: "Technical Writer",
    empContact: "+91 9876543233",
    empAddress: { city: "Nagpur", state: "Maharashtra", pincode: "440001" },
  },
  {
    empId: "EMP025",
    empName: "Alok Nath",
    empDesignation: "Support Engineer",
    empContact: "+91 9876543234",
    empAddress: { city: "Ranchi", state: "Jharkhand", pincode: "834001" },
  },
  {
    empId: "EMP026",
    empName: "Kavita Pillai",
    empDesignation: "HR Recruiter",
    empContact: "+91 9876543235",
    empAddress: { city: "Coimbatore", state: "Tamil Nadu", pincode: "641001" },
  },
  {
    empId: "EMP027",
    empName: "Varun Dhawan",
    empDesignation: "iOS Developer",
    empContact: "+91 9876543236",
    empAddress: { city: "Surat", state: "Gujarat", pincode: "395001" },
  },
  {
    empId: "EMP028",
    empName: "Shreya Ghoshal",
    empDesignation: "Android Developer",
    empContact: "+91 9876543237",
    empAddress: { city: "Mysuru", state: "Karnataka", pincode: "570001" },
  },
  {
    empId: "EMP029",
    empName: "Harshvardhan Rane",
    empDesignation: "BlockChain Developer",
    empContact: "+91 9876543238",
    empAddress: { city: "Noida", state: "Uttar Pradesh", pincode: "201301" },
  },
  {
    empId: "EMP030",
    empName: "Tanvi Azmi",
    empDesignation: "Legal Advisor",
    empContact: "+91 9876543239",
    empAddress: { city: "Panaji", state: "Goa", pincode: "403001" },
  },
  {
    empId: "EMP031",
    empName: "Jatin Sapru",
    empDesignation: "Sports Data Analyst",
    empContact: "+91 9876543240",
    empAddress: {
      city: "Jammu",
      state: "Jammu and Kashmir",
      pincode: "180001",
    },
  },
  {
    empId: "EMP032",
    empName: "Ritu Kumar",
    empDesignation: "Fashion Tech Lead",
    empContact: "+91 9876543241",
    empAddress: { city: "Agra", state: "Uttar Pradesh", pincode: "282001" },
  },
  {
    empId: "EMP033",
    empName: "Sanjay Dutt",
    empDesignation: "Network Engineer",
    empContact: "+91 9876543242",
    empAddress: { city: "Vadodara", state: "Gujarat", pincode: "390001" },
  },
  {
    empId: "EMP034",
    empName: "Madhuri Dixit",
    empDesignation: "Event Coordinator",
    empContact: "+91 9876543243",
    empAddress: { city: "Nashik", state: "Maharashtra", pincode: "422001" },
  },
  {
    empId: "EMP035",
    empName: "Ajay Devgn",
    empDesignation: "VFX Supervisor",
    empContact: "+91 9876543244",
    empAddress: { city: "Hyderabad", state: "Telangana", pincode: "500081" },
  },
  {
    empId: "EMP036",
    empName: "Kareena Kapoor",
    empDesignation: "Brand Strategist",
    empContact: "+91 9876543245",
    empAddress: { city: "Mumbai", state: "Maharashtra", pincode: "400050" },
  },
  {
    empId: "EMP037",
    empName: "Ranbir Kapoor",
    empDesignation: "Game Developer",
    empContact: "+91 9876543246",
    empAddress: { city: "Bengaluru", state: "Karnataka", pincode: "560100" },
  },
  {
    empId: "EMP038",
    empName: "Alia Bhatt",
    empDesignation: "PR Manager",
    empContact: "+91 9876543247",
    empAddress: { city: "New Delhi", state: "Delhi", pincode: "110020" },
  },
  {
    empId: "EMP039",
    empName: "Shahid Kapoor",
    empDesignation: "Fitness Tech Lead",
    empContact: "+91 9876543248",
    empAddress: { city: "Chandigarh", state: "Punjab", pincode: "160022" },
  },
  {
    empId: "EMP040",
    empName: "Kiara Advani",
    empDesignation: "Social Media Manager",
    empContact: "+91 9876543249",
    empAddress: { city: "Ahmedabad", state: "Gujarat", pincode: "380015" },
  },
  {
    empId: "EMP041",
    empName: "Vicky Kaushal",
    empDesignation: "Embedded Systems Engineer",
    empContact: "+91 9876543250",
    empAddress: { city: "Jalandhar", state: "Punjab", pincode: "144001" },
  },
  {
    empId: "EMP042",
    empName: "Katrina Kaif",
    empDesignation: "E-commerce Manager",
    empContact: "+91 9876543251",
    empAddress: { city: "Kochi", state: "Kerala", pincode: "682016" },
  },
  {
    empId: "EMP043",
    empName: "Ayushmann Khurrana",
    empDesignation: "Audio Engineer",
    empContact: "+91 9876543252",
    empAddress: { city: "Bhopal", state: "Madhya Pradesh", pincode: "462001" },
  },
  {
    empId: "EMP044",
    empName: "Taapsee Pannu",
    empDesignation: "Sports Journalist",
    empContact: "+91 9876543253",
    empAddress: { city: "Amritsar", state: "Punjab", pincode: "143001" },
  },
  {
    empId: "EMP045",
    empName: "Rajkummar Rao",
    empDesignation: "R&D Engineer",
    empContact: "+91 9876543254",
    empAddress: { city: "Gurugram", state: "Haryana", pincode: "122018" },
  },
  {
    empId: "EMP046",
    empName: "Bhumi Pednekar",
    empDesignation: "Sustainability Consultant",
    empContact: "+91 9876543255",
    empAddress: { city: "Kolkata", state: "West Bengal", pincode: "700029" },
  },
  {
    empId: "EMP047",
    empName: "Pankaj Tripathi",
    empDesignation: "Operations Manager",
    empContact: "+91 9876543256",
    empAddress: { city: "Gaya", state: "Bihar", pincode: "823001" },
  },
  {
    empId: "EMP048",
    empName: "Manoj Bajpayee",
    empDesignation: "Chief Technology Officer",
    empContact: "+91 9876543257",
    empAddress: { city: "Bettiah", state: "Bihar", pincode: "845438" },
  },
  {
    empId: "EMP049",
    empName: "Tabu Hashmi",
    empDesignation: "Creative Director",
    empContact: "+91 9876543258",
    empAddress: { city: "Hyderabad", state: "Telangana", pincode: "500034" },
  },
  {
    empId: "EMP050",
    empName: "Nawazuddin Siddiqui",
    empDesignation: "Testing Specialist",
    empContact: "+91 9876543259",
    empAddress: {
      city: "Muzaffarnagar",
      state: "Uttar Pradesh",
      pincode: "251001",
    },
  },
];


for(let i=0; i<employees.length; i++){

    let {id, name, designation, address} = employees[i]

    
    console.log(`id = ${employees[i].empId}`)
    console.log(`name = ${employees[i].empName.toUpperCase()}`)
    console.log(`designation= ${employees[i].empDesignation}`)
    console.log(`address= ${employees[i].empAddress}`)
    console.log("-----------------------")

}