"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import ForceGraph from "@/app/components/force-graph";
import { Button } from "@patternfly/react-core";

const query = gql`query 
GetNodes {
  getNodes{
    id
    firstName
    lastName
    description
    gender
    dob
  }
}`;

export default function Home() {
  const { data } = useSuspenseQuery(query);
  return <>
    <ForceGraph />
    <Button variant="primary">Primary</Button>
    {JSON.stringify(data)}
  </>;
}