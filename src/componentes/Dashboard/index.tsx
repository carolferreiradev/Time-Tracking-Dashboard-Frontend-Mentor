import { dataCards } from "../../data";
import { FaEllipsisH } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardContentDescription,
  CardContentHeader,
  CardImage,
  CardsContainer,
  Container,
  Profile,
  ProfileContainer,
  ProfileDescription,
  ProfileHeader,
  ProfileImage,
  ProfileMenu,
} from "./style";

export function Dashboard() {
  return (
    <Container>
      <Profile>
        <ProfileContainer>
          <ProfileHeader>
            <ProfileImage>
              <img src="/assets/image-jeremy.png" alt="Profile image" />
            </ProfileImage>
            <ProfileDescription>
              <p>Report for</p>
              <h1>
                <span>Jeremy</span>
                <span>Robson</span>
              </h1>
            </ProfileDescription>
          </ProfileHeader>

          <ProfileMenu>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ProfileMenu>
        </ProfileContainer>
      </Profile>
      <CardsContainer>
        {dataCards.map((card, index) => {
          return (
            <Card key={index} className={`${card.classCss}`}>
              <CardImage>
                <img src={card.image} alt={card.alt} />
              </CardImage>
              <CardContent>
                <CardContentHeader>
                  <h2>{card.title}</h2>
                  <button>
                    <FaEllipsisH />
                  </button>
                </CardContentHeader>
                <CardContentDescription>
                  <span>{card.timeframes.weekly.current}hrs</span>
                  <p>Last Week - {card.timeframes.weekly.previous}hrs</p>
                </CardContentDescription>
              </CardContent>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
}
