import { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useThemeColor } from '@/hooks/use-theme-color';


const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor(
    {
      dark: 'black',
      light: 'white',
    },
    'background'
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    console.log("refrescando...")
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      alwaysBounceVertical
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor={primaryColor}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
