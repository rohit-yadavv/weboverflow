import Link from "next/link";
import React from "react";
import RenderTag from "../share/RenderTag";
import Metric from "../share/Metric";
import { formatNumber, getTimeStamp } from "@/lib/utils";

interface Props {
  key: number;
  _id: number;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}
const QuestionCard = ({
  key,
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11"> 
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-2 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag)=>(
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3 "> 
        <Metric imgUrl='/assets/icons/avatar.svg' 
        alt='user'
        value={author[0].name}
        href={`/profile/${author[0]._id}`}
        
        title={`-asked ${getTimeStamp(createdAt)}`}
        textStyle="body-medium text text-dark400_light700"
        />
        
        <Metric imgUrl='/assets/icons/like.svg' 
        alt='upvotes'
        value={formatNumber(upvotes)}
        title="votes"
        textStyle="small-medium-text text-dark400_light800"
        />
        
        <Metric imgUrl='/assets/icons/message.svg' 
        alt='upvotes'
        value={formatNumber(answers.length)}
        title="answers"
        textStyle="small-medium-text text-dark400_light800"
        />
        <Metric imgUrl='/assets/icons/eye.svg' 
        alt='eye'
        value={formatNumber(views)}
        title="views"
        textStyle="small-medium-text text-dark400_light800"
        />
      </div>
      
    </div>
  );
};
 
export default QuestionCard;
