import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  async function onAddMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      header: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetup;