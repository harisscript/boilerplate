// src/hooks/usePermission.ts
import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform, Permission } from 'react-native';

export function usePermission(permission: Permission) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    async function checkPermission() {
      if (Platform.OS === 'android') {
        const result = await PermissionsAndroid.check(permission);
        setGranted(result);
      } else {
        setGranted(true); // iOS: handle with other lib if needed
      }
    }
    checkPermission();
  }, [permission]);

  return granted;
}
