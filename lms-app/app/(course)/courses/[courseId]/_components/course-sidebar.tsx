```tsx
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseProgress } from "@/components/course-progress";
import { getPurchasedStatus, getCompletedChaptersCount, calculateProgress } from "@/utils/course-utils";

interface CourseSidebarProps {
  course: { title: string, purchased:  { [key: string]: boolean } };
  chapters: {
    _id: string;
    courseId: string;
    title: string;
    isCompleted: { [key: string]: boolean };
    isFree: boolean;
  }[];
  userId: string;
}

export const CourseSidebar = ({
  course,
  chapters,
  userId,
}: CourseSidebarProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const purchased = getPurchasedStatus(course, userId);
  const completedChapters = getCompletedChaptersCount(chapters, userId);
  const progressCount = calculateProgress(completedChapters, chapters.length);

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>
        {purchased && (
          <div className="mt-10">
            <CourseProgress
              variant="success"
              value={progressCount}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter._id}
            _id={chapter._id}
            courseId={chapter.courseId}
            label={chapter.title}
            isCompleted={chapter.isCompleted[userId]}
            isLocked={!chapter.isFree &&!course.purchased[userId]}
          />
        ))}
      </div>
    </div>
  );
};
```

```ts
// File: lms-app/utils/course-utils.ts

export const getPurchasedStatus = (course, userId) =>!!course.purchased[userId];
export const getCompletedChaptersCount = (chapters, userId) => chapters.filter((chapter) =>!!chapter.isCompleted[userId]).length;
export const calculateProgress = (completedChapters, totalChapters) => (completedChapters / totalChapters) * 100;
```