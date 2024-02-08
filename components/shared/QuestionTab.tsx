import { getUserQuestions } from "@/lib/actions/user.action";
import React from "react";
import QuestionCard from "../cards/QuestionCard";
import { SearchParamsProps } from "@/types";
import Pagination from "./Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

async function QuestionTab({ searchParams, userId, clerkId }: Props) {
  const results = await getUserQuestions({
    userId,
    page: searchParams?.page ? +searchParams.page : 1,
  });

  return (
    <>
      {results.questions.map((question) => (
        <QuestionCard
          key={question._id}
          _id={question._id}
          clerkId={clerkId}
          title={question.title}
          tags={question.tags}
          author={question.author}
          views={question.views}
          createdAt={question.createdAt}
          upvotes={question.upvotes}
          answers={question.answers}
        />
      ))}
      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={results.isNext}
        />
      </div>
    </>
  );
}
export default QuestionTab;
