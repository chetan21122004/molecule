import React from 'react';
import CardList from './components/CardList';

const cardData = [
  {
    id: 1,
    user: "Emily Thompson",
    time: "2 hours ago",
    likes: 1234,
    caption: "Starting my Monday with a fresh cup of coffee and a good book. There's nothing better than the aroma of freshly brewed coffee to kickstart the day. What's your go-to Monday ritual? ☕📖 #MondayMotivation #CoffeeLover",
    mainImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: 2,
    user: "John Doe",
    time: "3 hours ago",
    likes: 567,
    caption: "Exploring the city and discovering hidden gems. Today, I stumbled upon this charming little café tucked away in a quiet alley. The vibe, the coffee, and the pastries were absolutely perfect. Sometimes, the best places are the ones you find by accident. 🌆☕ #CityExplorer #HiddenGems",
    mainImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: 3,
    user: "Alice Johnson",
    time: "5 hours ago",
    likes: 890,
    caption: "Nature walk in the woods. The sound of rustling leaves, the fresh earthy scent, and the sight of sunlight filtering through the trees—it's pure magic. Nature has a way of calming the mind and rejuvenating the soul. 🌳🍃 #NatureLover #ForestTherapy",
    mainImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: 4,
    user: "Michael Brown",
    time: "1 day ago",
    likes: 2345,
    caption: "Sunset vibes at the beach. The sky was painted in hues of orange, pink, and purple, and the waves gently kissed the shore. Moments like these remind me how beautiful life is. 🌅🌊 #SunsetLover #BeachVibes",
    mainImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: 5,
    user: "Sophia Lee",
    time: "2 days ago",
    likes: 678,
    caption: "Coffee time with friends. There's nothing better than catching up with old friends over a cup of coffee. Laughter, stories, and great coffee—what more could you ask for? ☕❤️ #CoffeeTime #FriendsForever",
    mainImage: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: 6,
    user: "Liam Smith",
    time: "3 days ago",
    likes: 345,
    caption: "Mountain adventure with breathtaking views. Hiking up the trail was challenging, but the panoramic view from the top made it all worth it. The mountains always remind me how small we are in this vast world. 🏔️🌄 #MountainLife #HikingAdventures",
    mainImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  }
];

export default function Page() {
  return <CardList cards={cardData} />;
}

