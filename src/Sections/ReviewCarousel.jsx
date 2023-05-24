import ReviewCard from "../assets/ReviewCard";

export default function ReviewCarousel() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment:
        "Great place to stay, Murman and his family are very accepting, very kind and very special! The house is gorgeous, in one of the most beautiful locations I have ever visited. My friend and I stayed for 3 nights which ended up being 4 due to us being stranded there for a night, but we were not charged for the extra night which was great.",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2F50%2F4e%2F87504e30eff3f51e7e2ab9b5401e8be7.jpg&f=1&nofb=1&ipt=e429381a5365fd27546632a595411e46011cde35de89b5128b9feb7475f4ead3&ipo=images",
      location: "New York, USA",
      name: "John Doe",
    },
    {
      id: 2,
      rating: 5,
      comment:
        "Great place to stay, Murman and his family are very accepting, very kind and very special! The house is gorgeous, in one of the most beautiful locations I have ever visited. My friend and I stayed for 3 nights which ended up being 4 due to us being stranded there for a night, but we were not charged for the extra night which was great.",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2F50%2F4e%2F87504e30eff3f51e7e2ab9b5401e8be7.jpg&f=1&nofb=1&ipt=e429381a5365fd27546632a595411e46011cde35de89b5128b9feb7475f4ead3&ipo=images",
      location: "London, UK",
      name: "Jane Smith",
    },
    {
      id: 3,
      rating: 4,
      comment:
        "Great place to stay, Murman and his family are very accepting, very kind and very special! The house is gorgeous, in one of the most beautiful locations I have ever visited. My friend and I stayed for 3 nights which ended up being 4 due to us being stranded there for a night, but we were not charged for the extra night which was great.",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2F50%2F4e%2F87504e30eff3f51e7e2ab9b5401e8be7.jpg&f=1&nofb=1&ipt=e429381a5365fd27546632a595411e46011cde35de89b5128b9feb7475f4ead3&ipo=images",
      location: "Paris, France",
      name: "Robert Johnson",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-4 md:justify-center lg:justify-between">
      {reviews.map((review, index) => (
        <div key={index} className="w-full md:w-auto">
          <ReviewCard reviews={review} />
        </div>
      ))}
    </div>
  );
}
