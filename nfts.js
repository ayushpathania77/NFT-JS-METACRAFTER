let Indiannfts=[];
function mintNFT (nname,godpower,price,) 
{
const god={"name":nname,"invincible":godpower,"price":price};
Indiannfts.push(god);
console.log("Minted: "+god.name); 
}

function listNFTs () {
for(let i=0;i<Indiannfts.length;i++)
{
console.log("\nID "+(i+1));
console.log("Name ="+Indiannfts[i].name);
console.log("God supermacy ="+Indiannfts[i].invincible);
console.log("Price = "+Indiannfts[i].price);
}
}
function getTotalSupply() {
console.log("\nTotal  nfts: "+Indiannfts.length);
}
mintNFT("Hanuman","infinite","5400");
mintNFT("Ram","heartful","5900");
mintNFT("Shyam","wealthy","2400");
mintNFT("Sai","helpful","5895");
listNFTs();
getTotalSupply();
