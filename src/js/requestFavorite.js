const requestsOptions = ({
    method,
    email,
    password,
    token,
    refreshToken,
    sid,
  }) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (token) headers.append('Authorization', `Bearer ${token}`);
    if (refreshToken) headers.append('Authorization', `Bearer ${refreshToken}`);
    if (email || password || sid) {
      let body = {};
      if (email) body.email = email;
      if (password) body.password = password;
      if (sid) body.sid = sid;
      console.log(JSON.stringify(body));
      return {
        method,
        headers,
        body: JSON.stringify(body),
        redirect: 'follow',
      };
    }
    return {
      method,
      headers,
      redirect: 'follow',
    };
  };
  export const requestRemoveFromFavorites = async ({ token, _id }) => {
    const response = await fetch(
      `https://callboard-backend.herokuapp.com/call/favourite/${_id}`,
      requestsOptions({ method: 'DELETE', token }),
    );
    return await response.json();
  };
  export const requestAddToFavorites = async ({ token, _id }) => {
    const response = await fetch(
      `https://callboard-backend.herokuapp.com/call/favourite/${_id}`,
      requestsOptions({ method: 'POST', token }),
    );
    return await response.json();
  };