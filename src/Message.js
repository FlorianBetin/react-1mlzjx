import React, { useEffect, useState } from 'react';

export default function Message() {

  useEffect(() => {
    console.log(`User is logged In`);
    return () => console.log('bye') // callback qui affiche 'bye' quand le composant se démonte, return () => = fonction de netoyage
  }, []);

  return <h1>User is logged in</h1>;
}
