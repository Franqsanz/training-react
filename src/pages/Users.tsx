import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Map } from "@google-maps/map";

import { Cover } from '../components/ui/Cover';
import { useAllUsers } from '../hooks/useAllUsers';

export function Users() {
  const { data, isPending } = useAllUsers();

  if (isPending) {
    return (
      <section className='h-[70vh] flex justify-center items-center'>
        <Cover title='Cargando...' />
      </section>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center p-10">
      <Cover title="Listado de Usuarios" />
      <div className="flex flex-wrap gap-6 mt-20 w-full max-w-6xl">
        {data?.map((user: any) => (
          <div
            key={user.id}
            className="w-80 border rounded-2xl p-5 bg-white flex flex-col gap-3"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-sm text-gray-500">
              @{user.username}
            </p>
            <div className="mt-3 text-sm text-gray-700">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Teléfono:</strong> {user.phone}</p>
            </div>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-semibold">Dirección</p>
              <p>{user.address.street} {user.address.number}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
            </div>
            <div className="mt-3 text-xs text-gray-400">
              Lat: {user.address.geolocation.lat} — Long: {user.address.geolocation.long}
            </div>
            <div className='w-full h-48'>
              <Map
                center={{
                  lat: Number(user.address.geolocation.lat),
                  lng: Number(user.address.geolocation.long),
                }}
              >
                <AdvancedMarker
                  position={{
                    lat: Number(user.address.geolocation.lat),
                    lng: Number(user.address.geolocation.long),
                }} />
              </Map>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
