import './ContactInfo.css';
export default function ContactInfo(props) {
  return (
      <header className={'info-container'}>
        <div className={'v-center'}>
          <h1 className={'fullname'}>{props.fullname}</h1>
        </div>
        <address className={'info-list'}>
          <a href={`mailto:${props.email}`}><b>Email:</b> {props.email}</a>
          <a href={`tel:${props.phone}`}><b>Phone:</b> {props.phone}</a>
          <p>{props.address}</p>
        </address>
      </header>
  );
}