'use client'

import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const StyledPage = styled.div<>`
  padding: 10px 0 10px;
`

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic *credentials*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
  }, [])

  // const fetchWebApi = async (endpont, method, body) => {
  //   const res = await fetch(`https://spotify.com${endpoint}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method,
  //     body: JSON.stringify(body);
  //   })

  //   return await res.json();
  // }

  return (
    <main>
      <StyledPage>
        
      </StyledPage>
    </main>
  );
}
