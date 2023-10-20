import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecPitchService {

  constructor() { }

  getEducationOptions() {
    return [
      "Early childhood education (level 0)",
      "Primary education (level 1)",
      "Lower secondary education (level 2)",
      "Upper secondary education (level 3)",
      "Postsecondary non-tertiary education (level 4)",
      "Short-cycle tertiary education (level 5)",
      "Bachelor’s or equivalent level (level 6)",
      "Master’s or equivalent level (level 7)",
      "Doctor or equivalent level (level 8)"
    ];
  }
  getOccupationOptions() {
    return [
      "Accommodation and Hospitality Managers", "Accountant", "Actuary", "Acupuncturist", "Advertising Manager", "Advertising Specialist", "Aeronautical Engineer", "Aeroplane Pilot", "Agricultural Consultant", "Agricultural Engineer", "Agricultural Scientist", "Agricultural Technician", "Airconditioning and Mechanical Services Plumber", "Airconditioning and Refrigeration Mechanic", "Aircraft Maintenance Engineer (Avionics)", "Aircraft Maintenance Engineer (Mechanical)", "Aircraft Maintenance Engineer (Structures)", "Ambulance Officer", "Amusement Centre Manager", "Anaesthetic Technician", "Anaesthetist", "Analyst Programmer", "Animal Attendants and Trainers", "Apiarist", "Aquaculture Farmer", "Arborist", "Architect", "Architectural Draftsperson", "Architectural, Building and Surveying Technicians", "Art Teacher (Private Tuition)", "Artistic Director", "Arts Administrator or Manager", "Audiologist", "Automotive Electrician", "Baker", "Barrister", "Beef Cattle Farmer", "Biochemist", "Biomedical Engineer", "Biotechnologist", "Boat Builder and Repairer", "Book or Script Editor", "Botanist", "Bricklayer", "Building and Engineering Technicians", "Building Inspector", "Business Machine Mechanic", "Butcher or Smallgoods Maker", "Cabinetmaker", "Cabler (Data and Telecommunications)", "Cafe or Restaurant Manager", "Camera Operator (Film, Television or Video)", "Caravan Park and Camping Ground Manager", "Cardiac Technician", "Cardiologist", "Cardiothoracic Surgeon", "Careers Counsellor", "Carpenter", "Carpenter and Joiner", "Cartographer", "Chef", "Chemical Engineer", "Chemical Plant Operator", "Chemist", "Chemistry Technician", "Chief Executive or Managing Director", "Chief Information Officer", "Child Care Centre Manager", "Chiropractor", "Cinema or Theatre Manager", "Civil Engineer", "Civil Engineering Draftsperson", "Civil Engineering Technician", "Clinical Coder", "Clinical Haematologist", "Clinical Psychologist", "Commodities Trader", "Community Arts Worker", "Community Worker", "Company Secretary", "Complementary Health Therapists", "Computer Network and Systems Engineer", "Conference and Event Organiser", "Conservation Officer", "Conservator", "Construction Estimator", "Construction Project Manager", "Contract Administrator", "Cook", "Copywriter", "Corporate General Manager", "Corporate Services Manager", "Cotton Grower", "Counsellors", "Crop Farmers", "Customer Service Manager", "Dairy Cattle Farmer", "Dance Teacher (Private Tuition)", "Dancer or Choreographer", "Database Administrator", "Dental Hygienist", "Dental Specialist", "Dental Technician", "Dental Therapist", "Dentist", "Dermatologist", "Developer Programmer", "Diagnostic and Interventional Radiologist", "Diesel Motor Mechanic", "Dietitian", "Director (Film, Television, Radio or Stage)", "Disabilities Services Officer", "Diversional Therapist", "Diving Instructor (Open Water)", "Dog Handler or Trainer", "Drainer", "Dressmaker or Tailor", "Driving Instructor", "Drug and Alcohol Counsellor", "Early Childhood (Pre- primary School) Teacher", "Earth Science Technician", "Economist", "Education Adviser", "Education Managers", "Educational Psychologist", "Electrical Engineer", "Electrical Engineering Draftsperson", "Electrical Engineering Technician", "Electrical Linesworker", "Electrician (General)", "Electrician (Special Class)", "Electronic Equipment Trades Worker", "Electronic Instrument Trades Worker (General)", "Electronic Instrument Trades Worker (Special Class)", "Electronics Engineer", "Emergency Medicine Specialist", "Emergency Service Worker", "Endocrinologist", "Engineering Manager", "Engineering Professionals", "Engineering Technologist", "Enrolled Nurse", "Environmental Consultant", "Environmental Engineer", "Environmental Health Officer", "Environmental Manager", "Environmental Research Scientist", "Environmental Scientists", "Exercise Physiologist", "External Auditor", "Facilities Manager", "Faculty Head", "Family and Marriage Counsellor", "Family Support Worker", "Farrier", "Fashion Designer", "Fibrous Plasterer", "Film and Video Editor", "Finance Broker", "Finance Manager", "Financial Brokers", "Financial Dealers", "Financial Institution Branch Manager", "Financial Investment Adviser", "Financial Investment Manager", "Financial Market Dealer", "First Aid Trainer", "Fitness Centre Manager", "Fitter (General)", "Fitter and Turner", "Fitter-Welder", "Flight Attendant", "Floor Finisher", "Florist", "Flower Grower", "Flying Instructor", "Food Technologist", "Footballer", "Forester", "Fruit or Nut Grower", "Funeral Workers", "Furniture Finisher", "Gallery or Museum Curator", "Gardener (General)", "Gas or Petroleum Operator", "Gasfitter", "Gastroenterologist", "General Practitioner", "Geologist", "Geophysicist", "Geotechnical Engineer", "Glazier", "Grain, Oilseed or Pasture Grower", "Grape Grower", "Graphic Designer", "Greenkeeper", "Gymnastics Coach or Instructor", "Hairdresser", "Hardware Technician", "Health and Welfare Services Managers", "Health Diagnostic and Promotion Professionals", "Health Information Manager", "Health Promotion Officer", "Helicopter Pilot", "Horse Breeder", "Horse Riding Coach or Instructor", "Horse Trainer", "Hospital Pharmacist", "Hotel or Motel Manager", "Human Resource Adviser", "Human Resource Manager", "Hydrogeologist", "Account Manager", "Business Analyst", "Business Development Manager", "Customer Support Officer", "Managers", "Project Manager", "Quality Assurance Engineer", "Sales Representative", "Security Specialist", "Support and Test Engineers", "Support Engineer", "Support Technicians", "Systems Test Engineer", "Trainer", "Illustrator", "Industrial Designer", "Industrial Engineer", "Industrial Pharmacist", "Information and Organisation Professionals", "Insurance Agent", "Insurance Broker", "Insurance Loss Adjuster", "Intellectual Property Lawyer", "Intensive Care Ambulance Paramedic", "Intensive Care Specialist", "Interior Designer", "Internal Auditor", "Interpreter", "Jeweller", "Jewellery Designer", "Jockey", "Joiner", "Journalists and Other Writers", "Judicial and Other Legal Professionals", "Laboratory Manager", "Land Economist", "Landscape Architect", "Landscape Gardener", "Liaison Officer", "Librarian", "Library Technician", "Life Science Technician", "Life Scientist (General)", "Life Scientists", "Lift Mechanic", "Livestock Farmers", "Locksmith", "Maintenance Planner", "Make Up Artist", "Management Accountant", "Management Consultant", "Manufacturer", "Marine Biologist", "Market Research Analyst", "Marketing Specialist", "Massage Therapist", "Materials Engineer", "Mathematician", "Meat Inspector", "Mechanical Engineer", "Mechanical Engineering Draftsperson", "Mechanical Engineering Technician", "Medical Administrator", "Medical Diagnostic Radiographer", "Medical Laboratory Scientist", "Medical Laboratory Technician", "Medical Oncologist", "Medical Practitioners", "Medical Radiation Therapist", "Medical Technicians", "Metal Fabricator", "Metal Fitters and Machinists", "Metal Machinist (First Class)", "Metallurgical or Materials Technician", "Metallurgist", "Meteorologist", "Microbiologist", "Middle School Teacher", "Midwife", "Mine Deputy", "Mining Engineer (excluding Petroleum)", "Minister of Religion", "Mixed Crop and Livestock Farmer", "Mixed Crop Farmer", "Mixed Livestock Farmer", "Motor Mechanic (General)", "Motorcycle Mechanic", "Multimedia Designer", "Multimedia Specialist", "Music Director", "Music Professionals", "Music Teacher (Private Tuition)", "Musician (Instrumental)", "Natural and Physical Science Professionals", "Naturopath", "Naval Architect", "Network Administrator", "Network Analyst", "Neurologist", "Neurosurgeon", "Newspaper or Periodical Editor", "Nuclear Medicine Technologist", "Nurse Educator", "Nurse Manager", "Nurse Practitioner", "Nurse Researcher", "Nurseryperson", "Nursing Clinical Director", "Nutritionist", "Obstetrician and Gynaecologist", "Occupational Health and Safety Adviser", "Occupational Therapist", "Operating Theatre Technician", "Ophthalmologist", "Optometrist", "Organisation and Methods Analyst", "Organisational Psychologist", "Orthopaedic Surgeon", "Orthoptist", "Orthotist or Prosthetist", "Osteopath", "Other Spatial Scientist", "Other Sports Coach or Instructor", "Otorhinolaryngologist", "Paediatric Surgeon", "Paediatrician", "Painting Trades Worker", "Panelbeater", "Pastrycook", "Patents Examiner", "Pathologist", "Pathology Collector", "Performing Arts Technicians", "Petroleum Engineer", "Pharmacy Technician", "Photographer", "Physicist ^", "Physiotherapist", "Pig Farmer", "Plastic and Reconstructive Surgeon", "Plumber (General)", "Podiatrist", "Policy Analyst", "Policy and Planning Manager", "Post Office Manager", "Poultry Farmer", "Power Generation Plant Operator", "Precision Instrument Maker and Repairer", "Pressure Welder", "Primary Health Organisation Manager", "Primary Products Inspectors", "Primary School Teacher", "Print Finisher", "Print Journalist", "Printing Machinist", "Private Tutors and Teachers", "Procurement Manager", "Production Manager (Forestry)", "Production Manager (Manufacturing)", "Production Manager (Mining)", "Production or Plant Engineer", "Program Director (Television or Radio)", "Program or Project Administrator", "Project Builder", "Property Manager", "Psychiatrist", "Psychologists", "Psychotherapist", "Public Relations Manager", "Public Relations Professional", "Quality Assurance Manager", "Quantity Surveyor", "Radiation Oncologist", "Radiocommunications Technician", "Real Estate Representative", "Records Manager", "Recreation Officer", "Recruitment Consultant", "Regional Education Manager", "Registered Nurse (Aged Care)", "Registered Nurse (Child and Family Health)", "Registered Nurse (Community Health)", "Registered Nurse (Critical Care and Emergency)", "Registered Nurse (Developmental Disability)", "Registered Nurse (Disability and Rehabilitation)", "Registered Nurse (Medical Practice)", "Registered Nurse (Medical)", "Registered Nurse (Mental Health)", "Registered Nurse (Paediatrics)", "Registered Nurse (Perioperative)", "Registered Nurse (Surgical)", "Registered Nurses", "Rehabilitation Counsellor", "Renal Medicine Specialist", "Research and Development Manager", "Resident Medical Officer", "Residential Care Officer", "Retail Buyer", "Retail Pharmacist", "Rheumatologist", "Roof Plumber", "Roof Tiler", "Safety Inspector", "Sales and Marketing Manager", "School Principal", "Science Technicians", "Secondary School Teacher", "Sheep Farmer", "Sheetmetal Trades Worker", "Ship’s Master", "Shipwright", "Signwriter", "Small Engine Mechanic", "Snowsport Instructor", "Social Professionals", "Social Worker", "Software and Applications Programmers", "Software Engineer", "Software Tester", "Solicitor", "Solid Plasterer", "Sonographer", "Sound Technician", "Special Education Teachers", "Special Needs Teacher", "Specialist Managers", "Specialist Physician (General Medicine)", "Specialist Physicians", "Speech Pathologist", "Sports Administrator", "Sports Centre Manager", "Sports Development Officer", "Sportspersons", "Stage Manager", "Statistician", "Stockbroking Dealer", "Stonemason", "Structural Engineer", "Student Counsellor", "Sugar Cane Grower", "Supply and Distribution Manager", "Surgeon (General)", "Surveying or Spatial Science Technician", "Surveyor", "Swimming Coach or Instructor", "Systems Administrator", "Systems Analyst", "Taxation Accountant", "Teacher of English to Speakers of Other Languages", "Teacher of the Hearing Impaired", "Teacher of the Sight Impaired", "Technical Cable Jointer", "Technical Director", "Technical Sales Representatives", "Technical Writer", "Telecommunications Engineer", "Telecommunications Field Engineer", "Telecommunications Linesworker", "Telecommunications Network Engineer", "Telecommunications Network Planner", "Telecommunications Technical Officer or Technologist", "Television Journalist", "Tennis Coach", "Textile, Clothing and Footwear Mechanic", "Thoracic Medicine Specialist", "Toolmaker", "Traditional Chinese Medicine Practitioner", "Translator", "Transport Company Manager", "Transport Engineer", "University Lecturer", "Upholsterer", "Urban and Regional Planner", "Urologist", "Valuer", "Vascular Surgeon", "Vegetable Grower", "Vehicle Body Builder", "Vehicle Painter", "Vehicle Trimmer", "Veterinarian", "Veterinary Nurse", "Video Producer", "Visual Arts and Crafts Professionals", "Vocational Education Teacher", "Wall and Floor Tiler", "Watch and Clock Maker and Repairer", "Web Administrator", "Web Designer", "Web Developer", "Welder (First Class)", "Welfare Centre Manager", "Welfare Worker", "Wine Maker", "Wood Machinist", "Wood Machinists and Other Wood Trades Workers", "Workplace Relations Adviser", "Youth Worker", "Zookeeper", "Zoologist"
    ]
  }

}