import { StatusBar } from "expo-status-bar";
import useColorScheme from "../../hooks/useColorScheme";
import Navigation from "../../navigation";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </>
  );
}
