import React, { FC, useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
type Props = {};

const GoogleMapRoomItem: FC<Props> = () => {
	const [address, setAddress] = useState('');
	const [center, setCenter] = useState({ lat: 0, lng: 0 });

	useEffect(() => {
		const geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address }, (results:any, status:any) => {
			if (status === 'OK') {
				setCenter({
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng(),
				});
			} else {
				console.error(`Geocode was not successful for the following reason: ${status}`);
			}
		});
	}, [address]);

	const Map = withScriptjs(
		withGoogleMap((props: any) => (
			<GoogleMap
				defaultZoom={8}
				defaultCenter={center}
			/>
		)),
	);

	function handleAddressChange(event: any) {
		setAddress(event.target.value);
	}
	return (
		<div>
			<input
				type='text'
				value={address}
				onChange={handleAddressChange}
			/>
			<div style={{ height: '500px', width: '100%' }}>
				<Map
					googleMapURL={
						'https://maps.googleapis.com/maps/api/js?key=42514e35050388a1759ceeeba1179cf52bb64980'
					}
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: '100%' }} />}
				/>
			</div>
		</div>
	);
};

export default GoogleMapRoomItem;
