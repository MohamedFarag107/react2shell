import { Todos } from "@/components/todos";
import { getTodos } from "@/components/get-todos";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';


export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Todos getTodos={getTodos()} />
    </Suspense>
  );
}
