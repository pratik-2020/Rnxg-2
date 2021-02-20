const Proj= [
    {name:"Vehicle Theft Detection System",description:"Vehicle theft has increased in recent years. These vehicles may incur huge losses on the amount invested on them. Over 5 vehicles which were reported as stolen every hour in Delhi. Total 44,158 vehicle theft cases were reported in 2018 against 39,084 such cases in 2017. So it’s necessary to create such a system that will prevent the vehicle theft. The main intention of the system is to prevent the vehicle from getting stolen and if it is then find out exact location of the stolen vehicle and inform it to the concerned authority. The system consists of a microcontroller, a GSM module, GPS module, NFC, force resistive sensors, vibration sensor and many other sensors used for theft detection. With the help of these sensors microcontroller will decide whether the vehicle or its spare parts are getting stolen or not. Like when thieves try to steal the wheels of the car, the load on the force resistive sensors is decreased, hence increasing there resistance. Whenever a theft is detected by the system, the alarm will be buzzed till either the authenticated owner of the vehicle doesn’t assure vehicle’s safety or the battery of the vehicle doesn’t die. The system will work integratedly with ECU and ECM of the vehicle. The cars lack these facility will be provided with custom solution where near field communication will be used for authentication purpose. In case when the vehicle got stolen, the system retrieves exact location of vehicle from GPS which is fed to a microcontroller. Microcontroller interfaced with GSM modem sends the information to the owner of the vehicle by an SMS. The vehicle owner is also able to turn off the engine by sending back an SMS. Whenever the GSM modem receives a message from a particular mobile number, microcontroller will trigger a switch which will then turn off the engine.",team:"Shweta Dalal, Dipika Kurhade, Ankita Mankar",image:""},
    {name:"LED Cube",description:"LED Cube is a 3 dimensional cube made out of Light Emitting Diodes (LEDs). It utilizes code based on instructable designer, CHR and uses an arduino to power the cube and act as programmer. This cube gives off a warm glow that is pleasant to the eye and will entertain people of all ages.",team:"Shweta Dalal",image:""},
    {name:"Quad Copter",description:"A Quadcopter is a small remote-controlled aircraft like a helicopter, with four blades that spin rapidly to push air downwards thus creating a thrust for keeping the body aloft. All these blades are coplanar spinning in the opposite direction. A quadcopter is a type of drone which can be controlled by a remote or made fully automated. It is a light machine made for achieving high speed and agility.It has a high potential for performing various tasks that are dangerous to humans and costly. It has a wide range of applications like Aerial Photography & Videography, Payload carrying, Roof cleaning and drone racing.",team:"Datta Dhore, Amar Tupat, Shubham Jagtap",image:""},
    {name:"RC Plane Aero Modeling",description:"A radio controlled plane (RC Plane) is a small flying machine i.e. controlled by an operator on the ground using a hand held transmitter. The plane is controlled using a transmitter communicating with a receiver sending signals to servos onboard the plane. The aerodynamics governing these aircrafts is the same as those governing large aircrafts. The aircraft considered in this study was designed to have optimum lift and drag characteristics. This was achieved by choosing the optimum values of fuselage length, wingspan, elevator, rudder dimensions and the all up weight determined by a series of iterative analysis. The RC plane has a wide range of commercial applications like it can be used for studying and implementing the different aspects of aero-modelling, photography and videography, payload caring, etc ",team:["Amar Tupat, Payal Warthi, Kshitij Sagar, Sarand Dondal, Datta Dhore, Yukta Behare"],image:""},
    {name:"ROBOCON 19",description:" In the first round, submission of abstract with description of the mechanism to be used and related mathematical calculations, diagrams, CAD designs was done. We successfully shortlisted in the first round. Next there was video submission of our working sample. In this video the robots should perform the tasks as per described in the abstract. Here is the video submission of our task: Our Team secured AIR 34 in the ROBOCON INDIA 2019. See video at https://drive.google.com/file/d/14vwT41p5X1O3mHtjUGpBRiDMG0YKcLlB/view ",team:"Team ROBOCON",image:""},
    {name:"TEAM DHRUVA_ SIH 19",description:"Students of Electronics and Telecommunication Engineering Department of Shri Guru Gobind Singhji Institute of Engineering and Technology Vishnupuri ,Nanded participated in Smart India Hackathon 2019(Hardware Edition), which is an initiative of HRD ministry of Government of India to increase the competition among the engineering student to solve the real world problem. This competition was held at Indian Institute of Technology, Delhi during 8 to 12 july ,2019 (5 Day Hackathon).  A team of following six students from institute with a team name “DHRUVA_”, participated in this competition and won first prize of Rs. 75000/-.",team:"Shankar Umakant Biradar(Extc), AkshayDilip Mirashe, Sarang Manoj Dondal, Swaraj Anil Shingote, Shweta Anil Dalal, Mrunal Sunil Joshi",image:""},
    {name:"Better and Faster Emergency care during accidents and vehicle impact",description:"An approach To design a self sustained system to detect car accident and able to inform the nearest emergency care servide with the accident location and record the incident that will be transmitted to a remote server for monitoring.",team:"Paresh Sahare, Aayush Singh, Kshitij Sagar, Laxmikant Suryawanshi, Shweta Dalal, Mrunal Joshi:",image:""},
    {name:"Line Follower and Maze Solver",description:"Line Follower →		A robot which uses lines as its path to reach a specific destination. Technology Used →		Arduino, Microcontroller Algorithms Implemented →	Shortest Path, PID Control. Awards →			Secured 1st Rank at BITS ATMOS (PILANI) 2018 in Line FollowerReached Semi-Finals E-Yantra 2018  (the same stack used)Stage-2 IARC IIT-Kanpur (Techkriti)",team:"Paresh Shahare, Aayush Singh, Laxmikant Suryawanshi, Ratik Zade, Shubham Jagtap, Aseet Dhale, Abhijeet Jadhav",image:""},
    {name:"Person Tracking and Counting",description:"Developed a system which could track and keep count of the number of people entering and exiting a gate in real time using overhead cameras and RaspberryPi. Watch the demo at https://drive.google.com/file/d/1_2sWhLeHrjxst-W3FmppyHvbdxk4JkMW/view",team:"Aayush Singh",image:""},
    {name:"Fetching emergency medical records using facial scan",description:"Created a face recognition API built on top of Dlib and simple REST API using Flask, to quickly query medical records by indentifyinh patiernts using face detection and recognition. See source code at https://github.com/ash2703/Face-Recognition-Api",team:"Aayush Singh",image:""},
    {name:"Self balancing bipedal robot",description:"Developed a self balancing biped robot after studying modeling, complex control systems and mathematical simulations, capable of balancing and traversing any path using wireless controller which is designed using XBEE communication protocol. See video at https://drive.google.com/file/d/1rOqDLjFe8bRKaMZ7dQWXvUujMrVD8QPC/view",team:"Paresh Shahare, Aayush Singh, Mrunal Joshi, Swaraj Shingote",image:""},
    {name:"Lab Component Mobile App",description:"Lab Component is designed to store digital data of components. It is having Signup Login page to create account of user, It also contains of deep learning model to recognise component and stores the details of specific component and user. All the data like username, email, password, quantity of components etc. it gets upload online on firebase and also it gets saved locally.",team:"Mrunal Joshi, Aayush Singh",image:""},
    {name:"Making websites meaningful for differently abled citizens",description:"Project Description: We aimed to design a website which helps and allows differently abled people to access websites easily and independently. Our website will read out contents of required websites loudly step-by-step and will wait for instructions from the user and perform tasks accordingly. To make this thing possible we used web scraping which allows us to extract desired information from a webpage. All the operations are hands free operations. I.e. all work is voice controlled such that it’ll be user friendly. Technical Stack used: Python, BS4(for web scraping), gTTS, PyAudio, Web Speech API, Django. https://drive.google.com/file/d/1jloxc3-Z3oK-A2W_en83TUkhVG_0-UVS/view?usp=sharing",team:"Pratik Thakur, Amit Choudhary, Vrushabh Bhagwatkar, Vedang Fate, Viren Bhosale",image:""},
    {name:"BATTERY MANAGEMENT SYSTEM FOR LIPO(Battery)",description:"BMS continuously counts the voltage of each cell in the battery. When the battery crosses discharging or charging voltage limit then MOSFET will act as a switch and it will disconnect the contact between the battery and the respective load. Also, it will give an indication of when the battery is charged or discharged. ON/OFF switch is also provided as Battery Saver(). Technology Stack:, Basic Electronics, Embedded Systems, Embedded c language, Proteus & EasyEDA Software",team:"Kshitij Kiran Sagar, Shruti Sunil Kulkarni, Komal Ankush Kuntewad",image:""},
    {name:"VOLTAGE AND CURRENT SENSOR",description:"The device continuously counts the voltage of the battery by using the voltage divider rule. That value will be sent to the microcontroller for further action. When the battery is connected as a load to the MOSFET, the Shunt is connected to the source terminal of the MOSFET, and the gate terminal of the MOSFET is connected to the microcontroller’s output pin(P1). When P1 receives the HIGH signal, MOSFET turns on. The blinking of the LED indicates that the MOSFET is on. Signal before shunt is then sent to OPAMP for amplification. Then That value will be sent to the microcontroller for further action. With a simple formula, (formula and respective values are according to the calibration of our circuit) we can find out the current drawn and the voltage of the battery. Basic Electronics Proteus & EasyEDA Software. Watch video at https://drive.google.com/file/d/1cVFzjKgagm6N01jznFAJdFr3S1-MN7Es/view?usp=sharing",team:"Kshitij Kiran Sagar, Shruti Sunil Kulkarni",image:""}
    
    ]
export default Proj;