import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { createAccount, getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import wallet from "/home/parth/wallet/my_wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000n;

// Mint address
<<<<<<< HEAD
const mint = new PublicKey("AaS3mQPS6sScGtJ8ABxvg4vcyWkG1pMtt5y2Uu1BcYuv");
=======
const mint = new PublicKey("3cZSGM6J8Fuu7RFWWoJDjd7dmr6cWoKHfLoNQ6deAM9d");
>>>>>>> 35f44b2 (rug day)

(async () => {
    try {
        // Create an ATA
        const ata = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
        console.log(`Your ata is: ${ata.address.toBase58()}`);

        // Mint to ATA
<<<<<<< HEAD
        const mintTx = await mintTo(connection, keypair, mint, ata.address,keypair.publicKey, 1n * token_decimals)
=======
        const mintTx = await mintTo(connection, keypair, mint, ata.address,keypair.publicKey, 1000n * token_decimals)
>>>>>>> 35f44b2 (rug day)
        console.log(`Your mint txid: ${mintTx}`);
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()
