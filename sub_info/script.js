const subjectData = ["Biology", "Math", "Marathi", "English"];
const fieldsData = {
    Biology: ["Medical", "Pharmacy"],
    Math: ["Engineering", "Architecture"],
    Marathi: ["Arts", "Teaching"],
    English: ["Literature", "Journalism"],
    "12th": ["Engineering", "Medical", "Commerce", "Arts", "IT"]
};
const coursesData = {
    Engineering: ["Computer Engineering", "Mechanical Engineering", "Civil Engineering"],
    Medical: ["MBBS", "BDS", "BAMS"],
    Commerce: ["BBA", "MBA", "CA"],
    IT: ["BCA", "BSc IT"],
    Arts: ["History", "Political Science"],
    Pharmacy: ["D.Pharm", "B.Pharm"],
    Architecture: ["B.Arch"],
    Literature: ["BA English"],
    Journalism: ["Mass Media"],
    Teaching: ["B.Ed", "D.Ed"]
};

 


// College Cutoff Data
const collegesData = {
    "Computer Engineering": [
        { name: "COEP Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
        { name: "VJTI Mumbai", open: "97%", obc: "94%", sc: "89%", st: "83%" },
        { name: "SPIT Mumbai", open: "96%", obc: "93%", sc: "88%", st: "82%" },
        { name: "MIT Pune", open: "95%", obc: "92%", sc: "87%", st: "81%" },
        { name: "Walchand College", open: "94%", obc: "91%", sc: "86%", st: "80%" },
        { name: "PICT Pune", open: "93%", obc: "90%", sc: "85%", st: "79%" },
        { name: "Sinhgad Pune", open: "92%", obc: "89%", sc: "84%", st: "78%" },
        { name: "DJSCE Mumbai", open: "91%", obc: "88%", sc: "83%", st: "77%" },
        { name: "Fr. Agnel", open: "90%", obc: "87%", sc: "82%", st: "76%" },
        { name: "VIIT Pune", open: "89%", obc: "86%", sc: "81%", st: "75%" },
        { name: "DY Patil Pune", open: "88%", obc: "85%", sc: "80%", st: "74%" },
        { name: "Pune University", open: "87%", obc: "84%", sc: "79%", st: "73%" },
        { name: "GHRCE Nagpur", open: "86%", obc: "83%", sc: "78%", st: "72%" },
        { name: "Amity Mumbai", open: "85%", obc: "82%", sc: "77%", st: "71%" },
        { name: "SIES Navi Mumbai", open: "84%", obc: "81%", sc: "76%", st: "70%" },
        { name: "Vishwakarma Pune", open: "83%", obc: "80%", sc: "75%", st: "69%" },
        { name: "AIT Pune", open: "82%", obc: "79%", sc: "74%", st: "68%" },
        { name: "Rajiv Gandhi Institute", open: "81%", obc: "78%", sc: "73%", st: "67%" },
        { name: "KK Wagh Nashik", open: "80%", obc: "77%", sc: "72%", st: "66%" }
    ],
    "MBBS": [
        { name: "KEM Mumbai", open: "99%", obc: "97%", sc: "92%", st: "88%" },
        { name: "BJ Medical Pune", open: "98%", obc: "96%", sc: "91%", st: "87%" },
        { name: "Seth GS Medical", open: "97%", obc: "95%", sc: "90%", st: "86%" },
        { name: "Grant Medical College", open: "96%", obc: "94%", sc: "89%", st: "85%" },
        { name: "Nair Medical College", open: "95%", obc: "93%", sc: "89%", st: "85%" },
        { name: "JJ Hospital Mumbai", open: "94%", obc: "92%", sc: "87%", st: "83%" },
        { name: "Lokmanya Tilak Medical", open: "93%", obc: "91%", sc: "86%", st: "82%" },
        { name: "Aurangabad Medical", open: "92%", obc: "90%", sc: "85%", st: "81%" },
        { name: "Nagpur Medical", open: "91%", obc: "89%", sc: "84%", st: "80%" },
        { name: "Solapur Medical", open: "90%", obc: "88%", sc: "83%", st: "79%" },
        { name: "Ambejogai Medical", open: "89%", obc: "87%", sc: "82%", st: "78%" },
        { name: "Latur Medical", open: "88%", obc: "86%", sc: "81%", st: "77%" },
        { name: "Dhule Medical", open: "87%", obc: "85%", sc: "80%", st: "76%" },
        { name: "Yavatmal Medical", open: "86%", obc: "84%", sc: "79%", st: "75%" },
        { name: "Akola Medical", open: "85%", obc: "83%", sc: "78%", st: "74%" },
        { name: "Kolhapur Medical", open: "84%", obc: "82%", sc: "77%", st: "73%" },
        { name: "Sangli Medical", open: "83%", obc: "81%", sc: "76%", st: "72%" },
        { name: "Satara Medical", open: "82%", obc: "80%", sc: "75%", st: "71%" },
        { name: "Nanded Medical", open: "81%", obc: "79%", sc: "74%", st: "70%" },
        { name: "Parbhani Medical", open: "80%", obc: "78%", sc: "73%", st: "69%" }
    ],

    "BDS": [
        { name: "Govt. Dental College, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
        { name: "DY Patil Dental College, Pune", open: "94%", obc: "91%", sc: "86%", st: "81%" },
        { name: "Bharati Vidyapeeth Dental College, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
        { name: "MGM Dental College, Navi Mumbai", open: "92%", obc: "89%", sc: "84%", st: "79%" },
        { name: "YMT Dental College, Navi Mumbai", open: "91%", obc: "88%", sc: "83%", st: "78%" },
        { name: "Sinhgad Dental College, Pune", open: "90%", obc: "87%", sc: "82%", st: "77%" },
        { name: "VSPM Dental College, Nagpur", open: "89%", obc: "86%", sc: "81%", st: "76%" },
        { name: "Rural Dental College, Loni", open: "88%", obc: "85%", sc: "80%", st: "75%" },
        { name: "Sharad Pawar Dental College, Wardha", open: "87%", obc: "84%", sc: "79%", st: "74%" },
        { name: "Swargiya Dadasaheb Kalmegh Dental College, Nagpur", open: "86%", obc: "83%", sc: "78%", st: "73%" },
        { name: "ACPM Dental College, Dhule", open: "85%", obc: "82%", sc: "77%", st: "72%" },
        { name: "Dr. Hedgewar Dental College, Hingoli", open: "84%", obc: "81%", sc: "76%", st: "71%" },
        { name: "Nair Dental College, Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
        { name: "Terna Dental College, Navi Mumbai", open: "82%", obc: "79%", sc: "74%", st: "69%" },
        { name: "C.S.M.S.S. Dental College, Aurangabad", open: "81%", obc: "78%", sc: "73%", st: "68%" },
        { name: "PDU Dental College, Solapur", open: "80%", obc: "77%", sc: "72%", st: "67%" },
        { name: "Tatyasaheb Kore Dental College, Kolhapur", open: "79%", obc: "76%", sc: "71%", st: "66%" },
        { name: "Mahatma Gandhi Dental College, Pune", open: "78%", obc: "75%", sc: "70%", st: "65%" },
        { name: "Dr. DY Patil Dental College, Navi Mumbai", open: "77%", obc: "74%", sc: "69%", st: "64%" }
    ],
        "BAMS": [
            { name: "Tilak Ayurved College, Pune", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Bharati Vidyapeeth Ayurved College, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Dr. D.Y. Patil Ayurvedic College, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "Maharashtra University of Health Sciences, Nashik", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "R.A. Podar Ayurved College, Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Govt. Ayurvedic College, Nagpur", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Govt. Ayurvedic College, Osmanabad", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Govt. Ayurvedic College, Nanded", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Shri Ayurved College, Nagpur", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Ashtang Ayurved Mahavidyalaya, Pune", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Seth Govindji Raoji Ayurved Mahavidyalaya, Solapur", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "YMT Ayurvedic Medical College, Navi Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "K.G. Mittal Ayurvedic College, Mumbai", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Sion Ayurvedic College, Mumbai", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Dr. J.J. Magdum Ayurved Medical College, Kolhapur", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Shree Ayurved Mahavidyalaya, Nagpur", open: "79%", obc: "76%", sc: "71%", st: "66%" },
            { name: "Shri K.R. Pandav Ayurvedic College, Nagpur", open: "78%", obc: "75%", sc: "70%", st: "65%" },
            { name: "Shri Ayurved College, Nashik", open: "77%", obc: "74%", sc: "69%", st: "64%" },
            { name: "Ayurved Seva Sangh College, Nashik", open: "76%", obc: "73%", sc: "68%", st: "63%" },
            { name: "Govt. Ayurvedic College, Akola", open: "75%", obc: "72%", sc: "67%", st: "62%" }
        ],

        "D.Pharm": [
            { name: "Govt. College of Pharmacy, Amravati", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Govt. College of Pharmacy, Aurangabad", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "Govt. College of Pharmacy, Karad", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Dr. D.Y. Patil Institute of Pharmacy, Pune", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Bharati Vidyapeeth College of Pharmacy, Kolhapur", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Sinhgad Institute of Pharmacy, Pune", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "MET Institute of Pharmacy, Nashik", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Shree Santkrupa College of Pharmacy, Karad", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Ideal College of Pharmacy, Kalyan", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "AISSMS College of Pharmacy, Pune", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Y.B. Chavan College of Pharmacy, Aurangabad", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "P.E.S. Modern College of Pharmacy, Pune", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "SVKM's Institute of Pharmacy, Dhule", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "H.K. College of Pharmacy, Mumbai", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "R. C. Patel Institute of Pharmacy, Shirpur", open: "79%", obc: "76%", sc: "71%", st: "66%" },
            { name: "Mahatma Gandhi Vidyamandir's Pharmacy College, Nashik", open: "78%", obc: "75%", sc: "70%", st: "65%" },
            { name: "Mahatma Gandhi Missions College of Pharmacy, Navi Mumbai", open: "77%", obc: "74%", sc: "69%", st: "64%" },
            { name: "Shivajirao S. Jondhale College of Pharmacy, Asangaon", open: "76%", obc: "73%", sc: "68%", st: "63%" },
            { name: "Padmashree Dr. Vithalrao Vikhe Patil Foundation's College of Pharmacy, Ahmednagar", open: "75%", obc: "72%", sc: "67%", st: "62%" },
            { name: "Vidya Bharati College of Pharmacy, Amravati", open: "74%", obc: "71%", sc: "66%", st: "61%" }
        ],

        "B.Pharm": [
            { name: "Poona College of Pharmacy, Pune", open: "95%", obc: "92%", sc: "88%", st: "83%" },
            { name: "Bombay College of Pharmacy, Mumbai", open: "94%", obc: "91%", sc: "87%", st: "82%" },
            { name: "Institute of Chemical Technology (ICT), Mumbai", open: "93%", obc: "90%", sc: "86%", st: "81%" },
            { name: "Govt. College of Pharmacy, Amravati", open: "92%", obc: "89%", sc: "85%", st: "80%" },
            { name: "Govt. College of Pharmacy, Aurangabad", open: "91%", obc: "88%", sc: "84%", st: "79%" },
            { name: "Govt. College of Pharmacy, Karad", open: "90%", obc: "87%", sc: "83%", st: "78%" },
            { name: "Dr. D.Y. Patil Institute of Pharmacy, Pune", open: "89%", obc: "86%", sc: "82%", st: "77%" },
            { name: "Bharati Vidyapeeth College of Pharmacy, Kolhapur", open: "88%", obc: "85%", sc: "81%", st: "76%" },
            { name: "Sinhgad Institute of Pharmacy, Pune", open: "87%", obc: "84%", sc: "80%", st: "75%" },
            { name: "MET Institute of Pharmacy, Nashik", open: "86%", obc: "83%", sc: "79%", st: "74%" },
            { name: "Shree Santkrupa College of Pharmacy, Karad", open: "85%", obc: "82%", sc: "78%", st: "73%" },
            { name: "Ideal College of Pharmacy, Kalyan", open: "84%", obc: "81%", sc: "77%", st: "72%" },
            { name: "AISSMS College of Pharmacy, Pune", open: "83%", obc: "80%", sc: "76%", st: "71%" },
            { name: "Y.B. Chavan College of Pharmacy, Aurangabad", open: "82%", obc: "79%", sc: "75%", st: "70%" },
            { name: "P.E.S. Modern College of Pharmacy, Pune", open: "81%", obc: "78%", sc: "74%", st: "69%" },
            { name: "SVKM's Institute of Pharmacy, Dhule", open: "80%", obc: "77%", sc: "73%", st: "68%" },
            { name: "H.K. College of Pharmacy, Mumbai", open: "79%", obc: "76%", sc: "72%", st: "67%" },
            { name: "R. C. Patel Institute of Pharmacy, Shirpur", open: "78%", obc: "75%", sc: "71%", st: "66%" },
            { name: "Mahatma Gandhi Vidyamandir's Pharmacy College, Nashik", open: "77%", obc: "74%", sc: "70%", st: "65%" },
            { name: "Mahatma Gandhi Missions College of Pharmacy, Navi Mumbai", open: "76%", obc: "73%", sc: "69%", st: "64%" }
        ],

        "Mechanical Engineering": [
            { name: "COEP Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "VJTI Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "SPIT Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "MIT Pune", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Walchand College, Sangli", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "PICT Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Sinhgad Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "DJ Sanghvi Mumbai", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Fr. Agnel, Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "VIIT Pune", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "DY Patil College, Pune", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Rajiv Gandhi Institute, Mumbai", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Lokmanya Tilak College, Navi Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "PCCOE Pune", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "MGM College, Aurangabad", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "RMD Sinhgad College, Pune", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Shivajirao S. Jondhale College, Thane", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "YCCE Nagpur", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Raisoni College, Nagpur", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "AISSMS COE, Pune", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "Civil Engineering": [
            { name: "COEP Pune", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "VJTI Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "SPIT Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "MIT Pune", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Walchand College, Sangli", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "PICT Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "Sinhgad Pune", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "DJ Sanghvi Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Fr. Agnel, Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "VIIT Pune", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "DY Patil College, Pune", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Rajiv Gandhi Institute, Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Lokmanya Tilak College, Navi Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "PCCOE Pune", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "MGM College, Aurangabad", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "RMD Sinhgad College, Pune", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Shivajirao S. Jondhale College, Thane", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "YCCE Nagpur", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Raisoni College, Nagpur", open: "79%", obc: "76%", sc: "71%", st: "66%" },
            { name: "AISSMS COE, Pune", open: "78%", obc: "75%", sc: "70%", st: "65%" }
        ],

        "B.Arch": [
            { name: "Sir J. J. College of Architecture, Mumbai", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "Dr. Bhanuben Nanavati College of Architecture, Pune", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "Sinhgad College of Architecture, Pune", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "Rizvi College of Architecture, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Kamla Raheja Vidyanidhi Institute for Architecture, Mumbai", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Bharati Vidyapeeth College of Architecture, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Dr. D. Y. Patil College of Architecture, Navi Mumbai", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "L.S. Raheja School of Architecture, Mumbai", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Pillai College of Architecture, Navi Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Marathwada Mitramandal College of Architecture, Pune", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Rachana Sansad Academy of Architecture, Mumbai", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "IES College of Architecture, Mumbai", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Smt. Kashibai Navale College of Architecture, Pune", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Dr. Baliram Hiray College of Architecture, Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Vidya Pratishthan's School of Architecture, Pune", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Lokmanya Tilak Institute of Architecture, Navi Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Shivaji University Department of Architecture, Kolhapur", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Shri Datta Meghe College of Architecture, Nagpur", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "MIT ADT University, Pune", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "D. Y. Patil School of Architecture, Ambi", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "History": [
            { name: "Savitribai Phule Pune University, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "Fergusson College, Pune", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "St. Xavier's College, Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "Elphinstone College, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Ramnarain Ruia College, Mumbai", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Nowrosjee Wadia College, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "S. P. College, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "K J Somaiya College, Mumbai", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Ismail Yusuf College, Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Dr. Ambedkar College, Nagpur", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Abasaheb Garware College, Pune", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Wilson College, Mumbai", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Vivekanand College, Kolhapur", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "SNDT Women's University, Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Yashwantrao Chavan College, Satara", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Jai Hind College, Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Shivaji University, Kolhapur", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "D. G. Ruparel College, Mumbai", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "Political Science": [
            { name: "Savitribai Phule Pune University, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "Fergusson College, Pune", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "St. Xavier's College, Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Ramanarain Ruia College, Mumbai", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "S. P. College, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Nowrosjee Wadia College, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "Ismail Yusuf College, Mumbai", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Jai Hind College, Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Wilson College, Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Shivaji University, Kolhapur", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Dr. Ambedkar College, Nagpur", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "K J Somaiya College, Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Yashwantrao Chavan College, Satara", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "SNDT Women's University, Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Vivekanand College, Kolhapur", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Elphinstone College, Mumbai", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "D. G. Ruparel College, Mumbai", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Pillai College of Arts, Commerce & Science, Navi Mumbai", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "B.Ed": [
            { name: "Savitribai Phule Pune University, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "Mumbai University, Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "Shivaji University, Kolhapur", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "SNDT Women's University, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Nagpur University, Nagpur", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Yashwantrao Chavan Maharashtra Open University, Nashik", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "MIT ADT University, Pune", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Tilak Maharashtra Vidyapeeth, Pune", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Amity University, Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "D. Y. Patil University, Navi Mumbai", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Bharati Vidyapeeth University, Pune", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Gokhale Education Society's College, Nashik", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Adarsha Shikshan Mandal College, Pune", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Pillai College of Education, Mumbai", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "St. Xavier's Institute of Education, Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Gandhi Shikshan Bhavan's College of Education, Mumbai", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Dr. D. Y. Patil College of Education, Pune", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Lokmanya Tilak College of Education, Navi Mumbai", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Vidya Pratishthan's College of Education, Pune", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "D.Ed": [
            { name: "Government D.Ed College, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "Government D.Ed College, Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "Tilak College of Education, Pune", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "Dr. Babasaheb Ambedkar College of Education, Aurangabad", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Nagpur Government D.Ed College, Nagpur", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Shivaji University D.Ed College, Kolhapur", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "SNDT Women's University D.Ed College, Mumbai", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "MIT ADT University D.Ed College, Pune", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Tilak Maharashtra Vidyapeeth D.Ed College, Pune", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "D. Y. Patil University D.Ed College, Navi Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Bharati Vidyapeeth D.Ed College, Pune", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Pillai College of Education D.Ed, Mumbai", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "St. Xavier's D.Ed College, Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Gokhale Education Society's D.Ed College, Nashik", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Adarsha Shikshan Mandal D.Ed College, Pune", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Vidya Pratishthan's D.Ed College, Pune", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Gandhi Shikshan Bhavan's D.Ed College, Mumbai", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Dr. D. Y. Patil D.Ed College, Pune", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Lokmanya Tilak D.Ed College, Navi Mumbai", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Amity University D.Ed College, Mumbai", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "BA English": [
            { name: "Fergusson College, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "St. Xavier's College, Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "Ruia College, Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "Elphinstone College, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Wilson College, Mumbai", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "SP College, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Modern College, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "MIT ADT University, Pune", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "SIES College, Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "D. G. Ruparel College, Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "SNDT Women's University, Mumbai", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "KJ Somaiya College, Mumbai", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "KC College, Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Amity University, Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Bharati Vidyapeeth University, Pune", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Pillai College, Panvel", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Nagpur University, Nagpur", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Shivaji University, Kolhapur", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "Mass Media": [
            { name: "Xavier Institute of Communications, Mumbai", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "Sophia College for Women, Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "Wilson College, Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "KC College, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Jai Hind College, Mumbai", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Mithibai College, Mumbai", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Kishinchand Chellaram College, Mumbai", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "St. Andrew's College, Mumbai", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Amity University, Mumbai", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "D. Y. Patil University, Navi Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Bharati Vidyapeeth University, Pune", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "MIT ADT University, Pune", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Flame University, Pune", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Nagpur University, Nagpur", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Shivaji University, Kolhapur", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Tilak Maharashtra Vidyapeeth, Pune", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "SNDT Women's University, Mumbai", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "SIES College, Mumbai", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Fergusson College, Pune", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "BBA": [
            { name: "Symbiosis Centre for Management Studies, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "NMIMS School of Business Management, Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "MIT-WPU School of Business, Pune", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "St. Xavier's College, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Flame University, Pune", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Bharati Vidyapeeth University, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "MIT ADT University, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "D.Y. Patil University, Pune", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Pune Institute of Business Management", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Amity University, Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "SIES College of Management, Navi Mumbai", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Sinhgad Institute of Management, Pune", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Rizvi College of Management Studies, Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Nagpur University, Nagpur", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Shivaji University, Kolhapur", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Tilak Maharashtra Vidyapeeth, Pune", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "SNDT Women's University, Mumbai", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Suryadatta Institute of Management, Pune", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "MBA": [
            { name: "IIM Nagpur", open: "99%", obc: "96%", sc: "92%", st: "88%" },
            { name: "SP Jain Institute of Management, Mumbai", open: "98%", obc: "95%", sc: "91%", st: "87%" },
            { name: "Jamnalal Bajaj Institute of Management Studies, Mumbai", open: "97%", obc: "94%", sc: "90%", st: "86%" },
            { name: "NMIMS Mumbai", open: "96%", obc: "93%", sc: "89%", st: "85%" },
            { name: "Symbiosis Institute of Business Management, Pune", open: "95%", obc: "92%", sc: "88%", st: "84%" },
            { name: "MIT-WPU School of Management, Pune", open: "94%", obc: "91%", sc: "87%", st: "83%" },
            { name: "Bharati Vidyapeeth Institute of Management, Pune", open: "93%", obc: "90%", sc: "86%", st: "82%" },
            { name: "KJ Somaiya Institute of Management, Mumbai", open: "92%", obc: "89%", sc: "85%", st: "81%" },
            { name: "Xavier Institute of Management, Mumbai", open: "91%", obc: "88%", sc: "84%", st: "80%" },
            { name: "Pune Institute of Business Management", open: "90%", obc: "87%", sc: "83%", st: "79%" },
            { name: "Sinhgad Institute of Management, Pune", open: "89%", obc: "86%", sc: "82%", st: "78%" },
            { name: "SIES College of Management, Navi Mumbai", open: "88%", obc: "85%", sc: "81%", st: "77%" },
            { name: "D.Y. Patil University, Pune", open: "87%", obc: "84%", sc: "80%", st: "76%" },
            { name: "Nagpur University, Nagpur", open: "86%", obc: "83%", sc: "79%", st: "75%" },
            { name: "Shivaji University, Kolhapur", open: "85%", obc: "82%", sc: "78%", st: "74%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "84%", obc: "81%", sc: "77%", st: "73%" },
            { name: "Tilak Maharashtra Vidyapeeth, Pune", open: "83%", obc: "80%", sc: "76%", st: "72%" },
            { name: "SNDT Women's University, Mumbai", open: "82%", obc: "79%", sc: "75%", st: "71%" },
            { name: "Flame University, Pune", open: "81%", obc: "78%", sc: "74%", st: "70%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "80%", obc: "77%", sc: "73%", st: "69%" }
        ],
        "CA": [
            { name: "Institute of Chartered Accountants of India (ICAI) Mumbai", open: "99%", obc: "96%", sc: "92%", st: "88%" },
            { name: "NMIMS School of Commerce, Mumbai", open: "98%", obc: "95%", sc: "91%", st: "87%" },
            { name: "MIT-WPU School of Commerce, Pune", open: "97%", obc: "94%", sc: "90%", st: "86%" },
            { name: "St. Xavier's College, Mumbai", open: "96%", obc: "93%", sc: "89%", st: "85%" },
            { name: "Jai Hind College, Mumbai", open: "95%", obc: "92%", sc: "88%", st: "84%" },
            { name: "Rizvi College, Mumbai", open: "94%", obc: "91%", sc: "87%", st: "83%" },
            { name: "Amity University, Mumbai", open: "93%", obc: "90%", sc: "86%", st: "82%" },
            { name: "Pune University, Pune", open: "92%", obc: "89%", sc: "85%", st: "81%" },
            { name: "Nagpur University, Nagpur", open: "91%", obc: "88%", sc: "84%", st: "80%" },
            { name: "Shivaji University, Kolhapur", open: "90%", obc: "87%", sc: "83%", st: "79%" }
        ],
        "BCA": [
            { name: "Symbiosis Institute of Computer Studies and Research, Pune", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "MIT-WPU School of Computer Science, Pune", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "NMIMS School of Science, Mumbai", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "St. Xavier's College, Mumbai", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "Bharati Vidyapeeth Institute of Computer Applications, Pune", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Sinhgad Institute of Computer Science, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "D.Y. Patil University, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "Tilak Maharashtra Vidyapeeth, Pune", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Nagpur University, Nagpur", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "Shivaji University, Kolhapur", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "SNDT Women's University, Mumbai", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Rizvi College, Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "KJ Somaiya College, Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Amity University, Mumbai", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Mumbai University, Mumbai", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Savitribai Phule Pune University, Pune", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Yashwantrao Chavan Maharashtra Open University, Nashik", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Suryadatta Institute of Management, Pune", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ],
        "BSc IT": [
            { name: "St. Xavier's College, Mumbai", open: "98%", obc: "95%", sc: "90%", st: "85%" },
            { name: "NMIMS School of Science, Mumbai", open: "97%", obc: "94%", sc: "89%", st: "84%" },
            { name: "MIT-WPU School of Computer Science, Pune", open: "96%", obc: "93%", sc: "88%", st: "83%" },
            { name: "Bharati Vidyapeeth University, Pune", open: "95%", obc: "92%", sc: "87%", st: "82%" },
            { name: "D.Y. Patil University, Pune", open: "94%", obc: "91%", sc: "86%", st: "81%" },
            { name: "Tilak Maharashtra Vidyapeeth, Pune", open: "93%", obc: "90%", sc: "85%", st: "80%" },
            { name: "Sinhgad Institute of Computer Science, Pune", open: "92%", obc: "89%", sc: "84%", st: "79%" },
            { name: "Nagpur University, Nagpur", open: "91%", obc: "88%", sc: "83%", st: "78%" },
            { name: "Shivaji University, Kolhapur", open: "90%", obc: "87%", sc: "82%", st: "77%" },
            { name: "SNDT Women's University, Mumbai", open: "89%", obc: "86%", sc: "81%", st: "76%" },
            { name: "Rizvi College, Mumbai", open: "88%", obc: "85%", sc: "80%", st: "75%" },
            { name: "KJ Somaiya College, Mumbai", open: "87%", obc: "84%", sc: "79%", st: "74%" },
            { name: "Mumbai University, Mumbai", open: "86%", obc: "83%", sc: "78%", st: "73%" },
            { name: "Amity University, Mumbai", open: "85%", obc: "82%", sc: "77%", st: "72%" },
            { name: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", open: "84%", obc: "81%", sc: "76%", st: "71%" },
            { name: "Savitribai Phule Pune University, Pune", open: "83%", obc: "80%", sc: "75%", st: "70%" },
            { name: "Yashwantrao Chavan Maharashtra Open University, Nashik", open: "82%", obc: "79%", sc: "74%", st: "69%" },
            { name: "Gokhale Institute of Politics and Economics, Pune", open: "81%", obc: "78%", sc: "73%", st: "68%" },
            { name: "Suryadatta Institute of Management, Pune", open: "80%", obc: "77%", sc: "72%", st: "67%" },
            { name: "Pune Institute of Business Management", open: "79%", obc: "76%", sc: "71%", st: "66%" }
        ]
};

let selectedSubject = "";
let selectedField = "";
let selectedCourse = "";

function resetSections() {
    document.querySelectorAll(".card").forEach(card => card.classList.add("hidden"));
}

function showEducationLevel() {
    resetSections();
    document.getElementById("education-section").classList.remove("hidden");
}

function showSubjects() {
    resetSections();
    document.getElementById("subject-section").classList.remove("hidden");

    let subjectContainer = document.getElementById("subject-container");
    subjectContainer.innerHTML = "";

    subjectData.forEach(subject => {
        let subjectCard = document.createElement("div");
        subjectCard.classList.add("subject-card");
        subjectCard.innerText = subject;
        subjectCard.onclick = () => showFields(subject);
        subjectContainer.appendChild(subjectCard);
    });
}

function showFields(subject) {
    resetSections();
    selectedSubject = subject;
    document.getElementById("fields-section").classList.remove("hidden");

    let fieldsContainer = document.getElementById("fields-container");
    fieldsContainer.innerHTML = "";

    if (fieldsData[subject]) {
        fieldsData[subject].forEach(field => {
            let fieldCard = document.createElement("div");
            fieldCard.classList.add("field-card");
            fieldCard.innerText = field;
            fieldCard.onclick = () => showCourses(field);
            fieldsContainer.appendChild(fieldCard);
        });
    }
}

function showCourses(field) {
    resetSections();
    selectedField = field;
    document.getElementById("courses-section").classList.remove("hidden");

    let coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "";

    if (coursesData[field]) {
        coursesData[field].forEach(course => {
            let courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            courseCard.innerText = course;
            courseCard.onclick = () => showColleges(course);
            coursesContainer.appendChild(courseCard);
        });
    }
}

function showColleges(course) {
    resetSections();
    selectedCourse = course;
    document.getElementById("colleges-section").classList.remove("hidden");

    let tableBody = document.getElementById("colleges-table-body");
    tableBody.innerHTML = ""; // Clear previous data

    if (collegesData[course]) {
        collegesData[course].forEach(college => {
            let row = `<tr>
                <td>${college.name}</td>
                <td>${college.open}</td>
                <td>${college.obc}</td>
                <td>${college.sc}</td>
                <td>${college.st}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    } else {
        tableBody.innerHTML = "<tr><td colspan='5'>No data available</td></tr>";
    }
}

// Back Button Functionality
function goBack(currentSection) {
    resetSections();
    if (currentSection === "fields") {
        showSubjects(); // Go back to subjects
    } else if (currentSection === "courses") {
        showFields(selectedSubject); // Go back to fields
    } else if (currentSection === "colleges") {
        showCourses(selectedField); // Go back to courses
    }
}


// Sample course info data (for MBBS, you can add info for other courses as needed)
const courseInfoData = {
    "MBBS": '[ MBBS is a highly respected and challenging medical degree that typically involves a rigorous curriculum spanning several years. The program covers various subjects including Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, Forensic Medicine, and more. Students gain both theoretical and practical insights into the human body, diseases, diagnostics, and treatment methods. Practical training in hospitals and clinics is an integral part of the MBBS course, ensuring that graduates are well-equipped with hands-on experience. Over the years, MBBS graduates have contributed significantly to public health, research, and innovation in the medical field. The course not only develops a deep understanding of medical science but also fosters empathy, critical thinking, and problem-solving skills. ]',
  
    "BDS": '[ BDS (Bachelor of Dental Surgery) is a professional dental degree focusing on oral health, dental diseases, and treatment methods. Students learn about oral anatomy, periodontics, prosthodontics, and orthodontics. The course involves clinical training where students practice diagnosing and treating dental conditions. BDS graduates can work in hospitals, private clinics, or research institutions. This degree also allows specialization in oral surgery, pediatric dentistry, and cosmetic dentistry. ]',
  
    "BAMS": '[ BAMS (Bachelor of Ayurvedic Medicine and Surgery) is an undergraduate degree that integrates traditional Ayurvedic medicine with modern medical science. The curriculum includes herbal medicine, Panchakarma therapy, anatomy, physiology, and pathology. Graduates can work as Ayurvedic doctors, researchers, or wellness consultants. The course also provides opportunities for further specialization in areas like Panchakarma, Kayachikitsa, or herbal medicine production. ]',
  
    "BBA": '[ BBA (Bachelor of Business Administration) is a professional course focused on business management and entrepreneurship. It covers finance, marketing, human resources, and strategic planning. Students gain exposure through internships, live projects, and case studies. BBA graduates can work in corporate firms, banking, and startups, or pursue an MBA for career advancement. ]',
  
    "MBA": '[ MBA (Master of Business Administration) is a postgraduate degree that enhances leadership, financial, and managerial skills. The curriculum includes case studies, internships, and hands-on industry experience. Graduates can work in corporate leadership roles, consulting, finance, and marketing. The course opens opportunities in investment banking, business development, and international trade. ]',
   
    "CA": '[ Chartered Accountancy (CA) is a professional certification focusing on financial management, auditing, and taxation. The course involves rigorous exams and practical training. CAs work in corporate finance, auditing firms, banks, and as independent consultants. The qualification offers high earning potential and career stability. ]',
  
    "BCA": '[ BCA (Bachelor of Computer Applications) is a course designed for students interested in software development, programming, and IT management. It covers networking, database management, cybersecurity, and coding languages like Python and Java. Graduates can work as software developers, web designers, or IT consultants. ]',
  
    "BSc IT": '[ BSc IT (Bachelor of Science in Information Technology) focuses on networking, cloud computing, data analytics, and cybersecurity. Students learn database management, web technologies, and artificial intelligence. Graduates can work as IT analysts, software engineers, or cybersecurity specialists. ]',
  
    "History": '[ A History degree explores civilizations, cultures, and political movements. It involves the study of historical events, social changes, and global developments. The course enhances research, analytical, and critical thinking skills, preparing students for careers in academia, journalism, and government sectors. ]',
  
    "Political Science": '[ Political Science studies governance, public policy, and international relations. Students analyze political ideologies, legal systems, and diplomatic policies. Career opportunities include government service, law, public administration, and political journalism. ]',
  
    "D.Pharm": '[ D. Pharm (Diploma in Pharmacy) is a short-term professional course focused on drug formulation, patient counseling, and pharmacology. Graduates can work in pharmaceutical companies, hospitals, or as medical representatives. The course also serves as a foundation for further studies like B. Pharm. ]',
  
    "B.Pharm": '[ B. Pharm (Bachelor of Pharmacy) is an undergraduate degree covering medicinal chemistry, drug delivery systems, and pharmacological studies. Graduates can work in hospitals, research institutions, pharmaceutical manufacturing, or open their own pharmacies. ]',
  
    "B.Arch": '[ B. Arch (Bachelor of Architecture) is a professional degree combining creative and technical knowledge. It covers architectural design, construction methods, and urban planning. Graduates can work as architects, urban designers, or project managers, helping shape modern infrastructure. ]',
  
    "BA English": '[ BA English focuses on literature, linguistics, and creative writing. The program enhances critical thinking, communication, and analytical skills. Graduates can pursue careers in publishing, journalism, content writing, or academia. The course is ideal for those passionate about language and storytelling. ]',
  
    "Mass Media": '[ A Mass Media degree covers journalism, advertising, public relations, and digital communication. Students learn about media ethics, broadcasting, and content creation. The course prepares graduates for careers in television, film, digital marketing, and corporate communications. Practical training in news reporting and film production is included. ]',
  
    "B.Ed": '[ B. Ed (Bachelor of Education) is a professional course for aspiring teachers. It includes pedagogy, educational psychology, and classroom management. Graduates can become teachers, educational consultants, or curriculum developers. The program emphasizes practical teaching experience and research in education methods. ]',
  
    "D.Ed": '[ D. Ed (Diploma in Education) is designed for individuals aiming to become elementary school teachers. The curriculum includes child development, teaching methodologies, and classroom management. Graduates can work in primary schools, special education institutions, or pursue higher studies in education. ]',
    
    "Computer Engineering": `Computer Engineering is a dynamic field that combines software and hardware knowledge to develop computing systems. 
    The curriculum covers subjects such as Programming, Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management, Artificial Intelligence, and Cybersecurity.
    Students gain expertise in designing and developing software applications, embedded systems, and advanced computing technologies.
    Practical experience is obtained through coding projects, internships, and research in emerging fields like AI, Cloud Computing, and IoT.
    Graduates can work as Software Developers, System Architects, Network Engineers, Cybersecurity Analysts, or Data Scientists.
    The demand for skilled computer engineers is growing across industries, from IT and finance to healthcare and manufacturing.
    Career opportunities extend globally, with high salaries and rapid career growth.
    Many students pursue postgraduate degrees like M.Tech, MS, or certifications in specialized fields such as Machine Learning and Blockchain.
    The industry continuously evolves with advancements in AI, automation, and big data, ensuring long-term career stability.
    Computer Engineering is ideal for students interested in technology, problem-solving, and innovation, making it one of the most sought-after engineering disciplines.`,
  
    "Mechanical Engineering": `Mechanical Engineering is one of the oldest and broadest branches of engineering, focusing on the design, manufacturing, and maintenance of mechanical systems.
    The curriculum includes subjects like Thermodynamics, Fluid Mechanics, Strength of Materials, Robotics, Manufacturing Processes, and Automotive Engineering.
    Students learn to develop and analyze machines, engines, and tools that power industries such as aerospace, automotive, and energy production.
    Practical exposure is gained through lab work, industrial visits, and projects related to product design, automation, and advanced materials.
    Mechanical engineers are in demand across multiple sectors, including defense, robotics, automobile manufacturing, and HVAC systems.
    Career opportunities include roles as Design Engineers, Production Managers, Maintenance Engineers, and Research Analysts.
    With growing advancements in automation, 3D printing, and sustainable energy, mechanical engineers are at the forefront of innovation.
    Many graduates pursue higher education like M.Tech or specialize in areas like Mechatronics and Renewable Energy.
    The field offers excellent scope for entrepreneurship, with opportunities in product design, consulting, and manufacturing startups.
    Mechanical Engineering provides long-term career prospects, blending creativity with technical expertise to shape the future of engineering solutions.`,
  
    "Civil Engineering": `Civil Engineering is a professional discipline that focuses on the design, construction, and maintenance of infrastructure such as roads, bridges, buildings, and water systems.
    The curriculum includes Structural Engineering, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, and Construction Management.
    Civil engineers are responsible for planning and executing large-scale construction projects, ensuring safety, sustainability, and efficiency.
    Practical experience is obtained through site visits, lab work, and hands-on projects in surveying, material testing, and structural analysis.
    Graduates can work in government projects, private construction companies, real estate development, or consultancy firms.
    Career roles include Structural Engineer, Project Manager, Construction Engineer, and Urban Planner.
    With rapid urbanization and infrastructure development, the demand for skilled civil engineers is continuously increasing.
    Opportunities also exist in sustainable and green building technologies, smart city planning, and disaster-resistant infrastructure.
    Many civil engineers pursue higher studies like M.Tech in specialized fields such as Hydraulic Engineering and Earthquake Engineering.
    Civil Engineering is a rewarding career for those interested in building the future of urban landscapes and ensuring sustainable development.` 
  };
  
  // Variable to temporarily store the course for which the modal was triggered
  let currentCourse = "";
  
  // Modified function to show course information via a modal before showing colleges
  function showColleges(course) {
    // If the course has detailed info (like MBBS), show the modal
    if (courseInfoData[course]) {
      currentCourse = course; // save the current course for later use
      showModal(courseInfoData[course]);
    } else {
      // If no info is set up, show cutoff list directly
      displayColleges(course);
    }
  }
  
  // Function to show modal with course information
  function showModal(infoText) {
    const modal = document.getElementById("courseModal");
    const infoDiv = document.getElementById("course-info");
    infoDiv.innerText = infoText;
    modal.classList.remove("hidden");
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("courseModal");
    modal.classList.add("hidden");
  }
  
  // Function to continue to the colleges section after reading course info
  function continueToColleges() {
    closeModal();
    // Now show the colleges cutoff list for the current course
    displayColleges(currentCourse);
  }
  
  // Function to display the colleges & cutoff list (unchanged)
  function displayColleges(course) {
    resetSections();
    document.getElementById("colleges-section").classList.remove("hidden");
  
    let tableBody = document.getElementById("colleges-table-body");
    tableBody.innerHTML = "";
  
    if (collegesData[course]) {
      collegesData[course].forEach(college => {
        tableBody.innerHTML += `<tr>
                  <td>${college.name}</td>
                  <td>${college.open}</td>
                  <td>${college.obc}</td>
                  <td>${college.sc}</td>
                  <td>${college.st}</td>
              </tr>`;
      });
    }
  }
  
  // Other functions remain unchanged (resetSections, showSubjects, showFields, showCourses)
  // ...






