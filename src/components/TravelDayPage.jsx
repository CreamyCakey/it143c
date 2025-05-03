import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const TravelDayPage = ({ theme }) => {
  const navigate = useNavigate();
  const { dayId } = useParams();
  const [activeDay, setActiveDay] = useState(dayId ? parseInt(dayId) : 1);

  useEffect(() => {
    if (dayId) {
      const parsedId = parseInt(dayId);
      if (!isNaN(parsedId) && parsedId >= 1 && parsedId <= 7) {
        setActiveDay(parsedId);
      }
    }
  }, [dayId]);

  const travelDays = {
    1: {
      title: "The Tour Started",
      date: "April 7, 2025",
      location: "Manila, Philippines",
      description: "Our journey began with an early morning arrival at Ninoy Aquino International Airport. The humidity hit us immediately as we stepped out of the terminal. After checking into our dorm in Quezon, we explored the Intramuros and Fort Santiago and learned about Philippine history through its statues and historical places. After we explore the Historical Place we unwind in Mall of Asia Baywalk as we watched the sunsets and enjoy our view after a long day trip.",
      images: [
        "/images/day1/day1.1.jpg",
        "/images/day1/day1.2.jpg",
        "/images/day1/day1.4.jpg",
        "/images/day1/day1.jpg",
        "/images/day1/day1.3.jpg",
      ],
      readTime: "5 min read"
    },
    2: {
      title: "Subic Bay Adventure",
      date: "April 8, 2025",
      location: "Subic Bay, Philippines",
      description: "We took an early bus to Subic Bay, the former US naval base. The coastal drive offered stunning views of the Sea. We spent the morning at SBMA LAW ENFORCEMENT DEPARTMENT, where we learned about the how the operations of the law enforcement without patroling in the area and we learned about how strict they are when it comes to public road rules. Next Destination is the SBECC or Subic Bay Exhibition & Convention Center where they teach us the history of the subic bay on how it become a naval base of the american and the history of the bataan death march. And Last Destination of the day at the SBMA Seaport Department (Vessel Traffic Management System), where we saw the system of how they manage the traffic of the port and tracking which port are available to dock.",
      images: [
        "/images/day2/day2.2.jpg",
        "/images/day2/day2.3.jpg",
        "/images/day2/day2.jpg",
        "/images/day2/day2.4.jpg",
        "/images/day2/day2.5.jpg",
        "/images/day2/day2.6.jpg",
      ],
      readTime: "7 min read"
    },
    3: {
      title: "Museum Tour",
      date: "April 9, 2025",
      location: "Manila, Philippines",
      description: "After the long tour at Subic Bay, we headed back to Manila for another tour in Museo ni Manuel Quezon, where we learned about the life of the first president of the Commonwealth of the Philippines. The museum was filled with artifacts and memorabilia from his life. Next we visited the Natural Museum of Natiral History, this museum offers a captivating journey through the Philippines' rich biodiversity. Visitors are greeted by the impressive skeleton of Lolong, the world's largest crocodile in captivity. The museum boasts interactive exhibits, including walk-through mangrove dioramas and climate change installations. With 12 permanent galleries, it showcases a diverse collection of botanical, zoological, and geological wonders . The museum's spacious layout and family-friendly environment make it an ideal destination for both educational trips and leisurely visits. Last tour at the Museo ng Pampangulong Sasakyan, this museum houses the largest collection of historic state cars in the Philippines. It features 12 presidential vehicles, including a 1934 Cadillac V-16 used by General Douglas MacArthur and a 1960 Rolls-Royce Phantom V associated with former First Lady Imelda Marcos . Each exhibit provides insights into the country's political history through these meticulously restored vehicles. Admission is free, and the museum offers ample parking, making it a convenient stop for history enthusiasts and car aficionados alike.",
      images: [
        "/images/day3/day3.3.jpg",
        "/images/day3/day3.4.jpg",
        "/images/day3/day3.jpg",
        "/images/day3/day3.1.jpg",
        "/images/day3/day3.2.jpg",
        "/images/day3/day3.5.jpg",
        
      ],
      readTime: "6 min read"
    },
    4: {
      title: "Technology Tour",
      date: "April 10, 2025",
      location: "Novaliches, Philippines",
      description: "An Early tour at Bangko Sentral ng Pilipinas, where we saw the production of the Philippines Pesos and Next tour at HYTEC POWER INC, this company aiming to bridge the gap between academia and industry by offering training, equipment, and services that align with real-world demands through technology they can help reduce the manpower and make the work easier. and in kindergarden we see the technology that they are using in the school and how they teach the students.",
      images: [
        "/images/day4/day4.jpg",
        "/images/day4/day4.1.jpg",
        "/images/day4/day4.2.jpg",
        "/images/day4/day4.5.jpg",
        "/images/day4/day4.3.jpg",
        "/images/day4/4.6.jpg",
      ],
      readTime: "8 min read"
    },
    5: {
      title: "Train Ride and Road Management",
      date: "April 11, 2025",
      location: "Santolan and Pasig, Philippines",
      description: "Early in the morning, we proceed to the MMDA in Pasig, We learned about the traffic management system and how they manage the traffic in the area. After that we headed to Light Transit Authority-Line 2 in Santolan, where we took a ride on the LRT-2, which was a new experience for us. We learned about the operations of the LRT-2 and how they manage the train system. We also visited the Santolan Depot, where we saw how they maintain and repair the trains.",
      images: [
        "/images/day5/day5.1.jpg",
        "/images/day5/day5.jpg",
        "/images/day5/day5.4.jpg",
        "/images/day5/day5.2.jpg",
        "/images/day5/day5.3.jpg",
      ],
      readTime: "6 min read"
    },  
    6: {
      title: "Bound to Baguio City",
      date: "April 12, 2025",
      location: "Baguio, Philippines",
      description: "Early as 1am, We travel going to Baguio known as the Summer Capital of the Philippines, where we visited La Trinidad, where the Strawberry Farm are unfortunately we didn't take any strawberries in the farm but instead we buy some souveniers and headed to Bell Church where we see the Unity of different Religion. And in the Afternoon, we headed to Philippine Military Academy, where we learn about the history of the academy and how they train the cadets. Next we headed to The Mansion, the official summer residence of the President of the Philippines. The Mansion is a beautiful structure with a rich history, and we were able to take some photos outside. And last destination we headed to Mines View Park, where the greeted with the amazing view and different culture.",
      images: [
        "/images/day6/day6.2.jpg",
        "/images/day6/day6.6.jpg",
        "/images/day6/day6.1.jpg",
        "/images/day6/day6.5.jpg",
        "/images/day6/day6.6.jpg",
      ],
      readTime: "9 min read"
    },
    7: {
      title: "Last Day in Baguio",
      date: "April 13, 2025",
      location: "Baguio, Philippines",
      description: "Our last day was spent souvenir shopping at Baguio City Market, where we bought some souvenirs and pasalubong for our family. We also visited Burnham Park, where we rented a bicycle and roam around the park. After that, we walked around the park and took some photos and we headed back to hotel for departure.",
      images: [
        "/images/day7/day7.jpg",
        "/images/day7/day7.2.jpg",
        "/images/day7/day7.3.jpg",
        "/images/day7/day7.4.jpg",
      ],
      readTime: "5 min read"
    }
  };

  const handleDayChange = (day) => {
    setActiveDay(day);
    navigate(`/travel-day/${day}`);

  };

  const goToPreviousDay = () => {
    if (activeDay > 1) {
      const newDay = activeDay - 1;
      setActiveDay(newDay);
      navigate(`/travel-day/${newDay}`);
    }
  };

  const goToNextDay = () => {
    if (activeDay < 7) {
      const newDay = activeDay + 1;
      setActiveDay(newDay);
      navigate(`/travel-day/${newDay}`);
    }
  };

  return (
    <div className={`min-h-screen py-12 ${
      theme === "dark" ? "bg-gray-900 text-gray-100" : 
      theme === "beige" ? "bg-beige-100 text-gray-800" : 
      "bg-white text-gray-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/blog')}
          className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg ${
            theme === "dark" ? "bg-gray-800 hover:bg-gray-700" :
            theme === "beige" ? "bg-beige-200 hover:bg-beige-300" :
            "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <ArrowLeft size={18} /> Back to Journal
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Day Navigation Sidebar */}
          <div className={`lg:w-1/4 p-4 rounded-xl h-fit sticky top-4 ${
            theme === "dark" ? "bg-gray-800" :
            theme === "beige" ? "bg-beige-200" :
            "bg-gray-100"
          }`}>
            <h2 className="text-xl font-bold mb-6">Philippines Itinerary</h2>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <button
                  key={day}
                  onClick={() => handleDayChange(day)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeDay === day 
                      ? theme === "dark" 
                        ? "bg-blue-600 text-white" 
                        : theme === "beige" 
                          ? "bg-yellow-400 text-gray-800" 
                          : "bg-blue-500 text-white"
                      : theme === "dark" 
                        ? "hover:bg-gray-700" 
                        : theme === "beige" 
                          ? "hover:bg-beige-300" 
                          : "hover:bg-gray-200"
                  }`}
                >
                  <div className="font-medium">Day {day}</div>
                  <div className="text-sm truncate">{travelDays[day].title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-xl mb-8 ${
                theme === "dark" ? "bg-gray-800" :
                theme === "beige" ? "bg-beige-200" :
                "bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{travelDays[activeDay].title}</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="opacity-70" />
                      <span>{travelDays[activeDay].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="opacity-70" />
                      <span>{travelDays[activeDay].location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="opacity-70" />
                  <span>{travelDays[activeDay].readTime}</span>
                </div>
              </div>
              
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {travelDays[activeDay].images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <img 
                      src={image} 
                      alt={`Day ${activeDay} - ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Description */}
              <div className="prose max-w-none mb-8">
                {travelDays[activeDay].description.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={goToPreviousDay}
                  disabled={activeDay === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    activeDay === 1 ? "opacity-50 cursor-not-allowed" : ""
                  } ${
                    theme === "dark" ? "bg-gray-700 hover:bg-gray-600" :
                    theme === "beige" ? "bg-beige-300 hover:bg-beige-400" :
                    "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <ChevronLeft size={18} /> Previous Day
                </button>
                <button
                  onClick={goToNextDay}
                  disabled={activeDay === 7}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    activeDay === 7 ? "opacity-50 cursor-not-allowed" : ""
                  } ${
                    theme === "dark" ? "bg-gray-700 hover:bg-gray-600" :
                    theme === "beige" ? "bg-beige-300 hover:bg-beige-400" :
                    "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Next Day <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDayPage;