import { AppHeader } from "@/app/components/app-header"
import { ApolloWrapper } from "../lib/apollo-provider"
import '@patternfly/react-core/dist/styles/base.css';
import './styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
        <body>
        <AppHeader>
        <ApolloWrapper>{children}</ApolloWrapper>
        </AppHeader>
        </body>
    </html>
  )
}
