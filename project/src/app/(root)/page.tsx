import MeetingTypeList from "@/components/MeetingTypeList";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <h1 className="scale-80 text-6xl">Casual Meeting</h1>
      <CardContainer className="w-full -mt-8">
        <CardBody
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full"
        >

          <div className="h-[400px] w-full rounded-[20px] bg-hero bg-cover">
            <div className="flex h-full flex-col justify-between max-md:px-5 max-md:pb-8 lg:p-11">
              <h2 className="text-3xl font-bold">Welcome To Casual Meet</h2>
              <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
                {/* Upcoming Meeting at: 12:30 PM */}
              </h2>
              <div className="flex flex-col gap-2">
                <CardItem translateZ="50">
                  <h1 className="text-4xl font-extrabold lg:text-7xl">
                    {time}
                  </h1>
                </CardItem>
                <CardItem
                  translateZ="80"
                  className=""
                  rotateY={10}
                  rotateX={10}
                >
                  <p className="text-lg font-medium shadow-white text-sky-1 lg:text-2xl">
                    {date}
                  </p>
                </CardItem>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
