import { AdminViewVisit } from "@/components/dashboard/AdminViewVisit";
import { visitConterGet } from "@/libs/visit/actions";

async function getViewVisit() {
  const resp = await visitConterGet();
  const data = JSON.parse(resp);
  return data;
}

const pageVisit = async () => {
  const visit = await getViewVisit();
  return (
    <div>
      <AdminViewVisit visits={visit} />
    </div>
  );
};

export default pageVisit;
