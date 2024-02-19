import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 55.8474006652832,
      lng: -4.379734992980957
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-80 md:h-[50vh] md:min-h-[280px] w-2/3 rounded-2xl shadow-2xl shadow-slate-950">
      <GoogleMapReact className="rounded-2xl"
        bootstrapURLKeys={{ key: "AIzaSyCgQQaEhtBr4bn7kuMs4waCPyxKyQVL7ps" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={55.84749984741211}
          lng={-4.3797287940979}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}