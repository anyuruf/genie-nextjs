"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import ForceGraph from "@/app/components/force-graph";
import ZoneIcon from '@patternfly/react-icons/dist/esm/icons/zone-icon';

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
  return <main>
    <ForceGraph />
    <ZoneIcon/>
    {JSON.stringify(data)}
    </main>;
}