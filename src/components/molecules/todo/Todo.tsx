import { TodosProps } from "../../../types/todo";

export default function Todo({
  title,
  userId,
  completed,
}: Pick<TodosProps, "userId" | "completed" | "title">) {
  const isCompletedText = completed ? "[完]" : "[未完]";
  return (
    <>
      <p>
        {isCompletedText} (user:{userId}):{title}
      </p>
    </>
  );
}
