import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home(){
  const billboard = await getBillboard("0e12e5cf-29ab-4529-b8d5-c5371dae1f7b");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        </div>
      </div>
    </Container>
  )
};

