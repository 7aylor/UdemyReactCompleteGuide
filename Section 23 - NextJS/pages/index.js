import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "some address 5, 12345 some city",
    description: "this is a first meetup"
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/CENU%2C_S%C3%A3o_Paulo%2C_Brasil_%28cropped%29.jpg/1280px-CENU%2C_S%C3%A3o_Paulo%2C_Brasil_%28cropped%29.jpg",
    address: "some address 10, 12345 some city",
    description: "this is a second meetup"
  }
]

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default HomePage;