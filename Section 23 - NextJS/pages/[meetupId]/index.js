import MeetupDetail from "../../components/meetups/meetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
      title="A First Meetup"
      address="Some Address"
      description="This is the first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: {
        meetupId: 'm1'
      }},
      { params: {
        meetupId: 'm2'
      }},
    ]
  }
}

export async function getStaticProps(context) {
  //fetch data for single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
      id: meetupId,
      title: "First Meetup",
      address: "Some Address",
      description: "This is the first meetup"
    }
  }
}

export default MeetupDetails;
