import { useState } from "react";
import { Keypair } from "@solana/web3.js";
import * as Bip39 from "bip39";

export default function Home() {
  const [mnemonic, setMnemonic] = useState(null);
  const [account, setAccount] = useState(null);

  const generateWallet = () => {
    const generatedMnemonic = Bip39.generateMnemonic();
    setMnemonic(generatedMnemonic);
    console.log('generatedMnemonic', generatedMnemonic);

    const seed = Bip39.mnemonicToSeedSync(generatedMnemonic).slice(0, 32);
    console.log('seed', seed);

    const newAccount = Keypair.fromSeed(seed);
    console.log('newAccount', newAccount.publicKey.toString());

    setAccount(newAccount);
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
        <span className="text-[#9945FF]">Solana</span>ウォレットを作ろう！
      </h1>
      <div className="mx-auto mt-5 text-gray-500">
        Solanaウォレットの新規作成、インポート、エアドロップ、送金機能の開発にチャレンジしてみよう
      </div>

      <hr className="my-6" />

      <div>
        <h3 className="p-2 border-dotted border-l-8 border-l-indigo-600">My Wallet</h3>
        {account && <div className="my-6 text-indigo-600 font-bold">アドレス: {account.publicKey.toString()}</div>}
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="p-2 border-dotted border-l-4 border-l-indigo-400">STEP1: ウォレットを新規作成する</h2>
        <button
          className="p-2 my-6 text-white bg-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg cursor-pointer"
          onClick={generateWallet}
        >
          ウォレットを生成
        </button>
        {mnemonic && (
          <>
            <div className="mt-1 p-4 border border-gray-300 bg-gray-200">{mnemonic}</div>
            <strong className="text-xs">
              このフレーズは秘密にして、安全に保管してください。このフレーズが漏洩すると、誰でもあなたの資産にアクセスできてしまいます。<br />
              オンライン銀行口座のパスワードのようなものだと考えてください。
            </strong>
          </>
        )}
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="p-2 border-dotted border-l-4 border-l-indigo-400">STEP2: 既存のウォレットをインポートする</h2>
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="p-2 border-dotted border-l-4 border-l-indigo-400">STEP3: 残高を取得する</h2>
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="p-2 border-dotted border-l-4 border-l-indigo-400">STEP4: エアドロップ機能を実装する</h2>
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="p-2 border-dotted border-l-4 border-l-indigo-400">STEP5: 送金機能を実装する</h2>
      </div>
    </div>
  )
}
