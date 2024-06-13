// src/utils/nfidWallet.ts
import { AuthClient } from '@dfinity/auth-client';


export const connectNFIDWallet = async (): Promise<string> => {
  try {
    const authClient = await AuthClient.create();
    const isAuthenticated = await authClient.isAuthenticated();

    if (isAuthenticated) {
      const identity = authClient.getIdentity();
      return identity.getPrincipal().toText();
    } else {
      return new Promise((resolve, reject) => {
        authClient.login({
          onSuccess: (wallet) => {
            let identity = wallet.delegations[0].delegation?.targets?.[0];
            if (identity) {
              resolve(identity.toString());
            } else {
              resolve("");
            }
          },
          onError: (error: string | undefined) => {
            if (error) {
              console.error("Error connecting to NFID wallet:", error);
            } else {
              console.error("Error connecting to NFID wallet: Unknown error");
            }
            reject("");
          },
        });
      });
    }
  } catch (error) {
    console.error("Error connecting to NFID wallet:", error);
    return "";
  }
};


export const isNFIDWalletConnected = async (): Promise<boolean> => {
  try {
    const authClient = await AuthClient.create();
    return await authClient.isAuthenticated();
  } catch (error) {
    console.error('Error checking NFID wallet connection:', error);
    return false;
  }
};

export const disconnectNFIDWallet = async (): Promise<void> => {
  try {
    const authClient = await AuthClient.create();
    await authClient.logout();
  } catch (error) {
    console.error('Error disconnecting from NFID wallet:', error);
  }
};