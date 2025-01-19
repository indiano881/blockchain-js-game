import { ethers } from 'ethers';

export default defineNuxtPlugin((nuxtApp) => {
    const wallet = {
        account: null,
        accountCompact: null,
        network: null,
        balance: null,
        provider: null,

        async init() {
            if (!window.ethereum) {
                console.error('MetaMask is not installed');
                return;
            }

            this.provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the current network
            this.network = await this.provider.getNetwork();

            // Request accounts and handle response
            const accounts = await this.provider.send('eth_requestAccounts', []);
            const [account] = accounts;

            this.setAccount(account);

            // Listen for account changes
            window.ethereum.on('accountsChanged', (accounts) => {
                const [newAccount] = accounts;
                console.log('Account changed:', newAccount);
                this.setAccount(newAccount);
            });

            // Listen for chain changes
            window.ethereum.on('chainChanged', (chainId) => {
                console.log('Chain changed:', chainId);
                window.location.reload();
            });
        },

        async setAccount(newAccount) {
            if (newAccount) {
                this.account = newAccount;
                this.accountCompact = `${newAccount.substring(0, 4)}...${newAccount.substring(newAccount.length - 4)}`;

                const balance = (await this.provider.getBalance(newAccount)).toString();
                this.balance = `${(+ethers.utils.formatEther(balance)).toFixed(3)}`;
            } else {
                this.account = null;
                this.accountCompact = null;
                this.balance = null;
            }
        },
    };

    wallet.init();

    nuxtApp.provide('wallet', wallet);
});
