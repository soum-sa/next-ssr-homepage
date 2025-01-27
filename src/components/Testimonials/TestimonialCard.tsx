import { RatingStarIcon } from "@src/styles/icons";

import {
  cardContainerStyles,
  cardHeaderStyles,
  cardAvatarStyles,
  cardUsernameStyles,
  cardRatingStyles,
  cardContentStyles,
  cardBodyTitleStyles,
  cardBodyTextStyles,
} from "./TestimonialCard.styled";

type TestimonialCardProps = {
  data: UserTestimonial;
};

export type UserTestimonial = {
  author: string;
  rating: number;
  title: string;
  body: string;
};

function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <div className={cardContainerStyles}>
      <div className={cardHeaderStyles}>
        <div className={cardAvatarStyles}>{data.author.substring(0, 2)}</div>
        <div>
          <p className={cardUsernameStyles}>{data.author}</p>
          <div className={cardRatingStyles}>
            {Array.from({ length: data.rating }, (_, i) => i + 1).map(
              (item) => (
                <RatingStarIcon key={item} />
              )
            )}
          </div>
        </div>
      </div>

      <div className={cardContentStyles}>
        <p className={cardBodyTitleStyles}>{data.title}</p>
        <p className={cardBodyTextStyles}>{data.body}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
