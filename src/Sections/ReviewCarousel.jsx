import ReviewCard from "../assets/ReviewCard";

export default function ReviewCarousel() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment:
        "My stay at the hotel Lamala in Svaneti was absolutely unforgettable! From the moment I walked through the doors, I was greeted with warm smiles and impeccable service. The stunning mountain views from my room were breathtaking, and the luxurious amenities made me feel pampered. I highly recommend this hotel for a truly indulgent and memorable experience.",
      profilePic:
        "https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "Barcelona, Spain",
      name: "Sofia Ramirez",
    },
    {
      id: 2,
      rating: 5,
      comment:
        "If you're looking for a slice of paradise in Svaneti, this hotel is the perfect choice. The serene ambiance combined with the stunning architecture and elegant décor create a truly enchanting atmosphere. The staff went above and beyond to ensure my comfort and satisfaction, making my stay truly exceptional. The delicious cuisine and breathtaking surroundings added the cherry on top. A must-visit!",
      profilePic:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "Prague, Czech Republic",
      name: "Tomas Novak",
    },
    {
      id: 3,
      rating: 4,
      comment:
        "I can't say enough good things about this hotel in Svaneti! The attention to detail in every aspect of my stay was remarkable. The rooms were spacious, tastefully decorated, and offered breathtaking views of the surrounding mountains. The staff were incredibly friendly and accommodating, always ready to assist with any request. The hotel's location is also ideal, providing easy access to the region's natural wonders. ",
      profilePic:
        "https://images.unsplash.com/photo-1526945870720-88be78ede6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      location: "Paris, France",
      name: "Jean-Luc Dubois",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-4 md:justify-center ">
      {reviews.map((review, index) => (
        <div key={index} className="w-full md:w-auto">
          <ReviewCard reviews={review} />
        </div>
      ))}
    </div>
  );
}
