import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AssignmentsPage,
  TalksPage,
  NotesPage,
  ResourcesPage,
  AssignmentView,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/assignments" element={<AssignmentsPage />} />
      <Route path="/talks" element={<TalksPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/:assignmentId" element={<AssignmentView />} />
    </Routes>
  );
}

export default App;
