// @flow

import React from 'react';

type Props = {
  name: string
}

export default function Venue(props: Props) {
  return <li className="venue">{props.name}</li>;
}
