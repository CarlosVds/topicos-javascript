 const defaultCreate = {
    name: '',
    life: 1,
    maxLife: 1,
    ataque: 0,
    defesa: 0
 }  


 const createKnight = (name) => {
    return{
        ...defaultCreate,
        name: name,
        life: 100,
        maxLife: 100,
        ataque: 8,
        defesa: 4
    }   
 }

 const createMogo = (name) => {
    return{
        ...defaultCreate,
        name: name,
        life: 80,
        maxLife: 80,
        ataque: 12,
        defesa: 6
    }   
 }

 const createMonster = () => {
    return{
        ...defaultCreate,
        name: "Monster",
        life: 120,
        maxLife: 120,
        ataque: 15,
        defesa: 2
    }   
 }

 const stage = {

      start(lutador1, lutador2, lutadorEl1, lutadorEl2) {
         this.lutador1 = lutador1;
         this.lutador2 = lutador2;
         this.lutadorEl1 = lutadorEl1;
         this.lutadorEl2 = lutadorEl2;
            
         this.lutadorEl1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.lutador1, this.lutador2));
         this.lutadorEl2.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.lutador2, this.lutador1));

         this.update();
      },

      update(){
         //Lutador1
         this.lutadorEl1.querySelector('.name').innerHTML = `${this.lutador1.name} ${this.lutador1.life.toFixed(0)} HP`;
         let j1Pct = (this.lutador1.life / this.lutador1.maxLife) * 100;
         this.lutadorEl1.querySelector('.bar').style.width = `${j1Pct}%`;
      
          //Lutador2
         this.lutadorEl2.querySelector('.name').innerHTML = `${this.lutador2.name} ${this.lutador2.life.toFixed(0)} HP`;
         let j2Pct = (this.lutador2.life / this.lutador2.maxLife) * 100;
         this.lutadorEl2.querySelector('.bar').style.width = `${j2Pct}%`;
        
      },

      doAttack(atacando, atacado){
         if(atacando.life <= 0 || atacado.life <= 0){
            log.addMessage('Adiversário está morto, não pode atacar');
            return;
         }

         let fatorAtaque = (Math.random() * 2).toFixed(2);
         let fatorDefesa = (Math.random()  * 2).toFixed(2);

         let ataqueAtual = atacando.ataque * fatorAtaque;
         let defesaAtual = atacado.defesa * fatorDefesa;


         if(ataqueAtual > defesaAtual){
            atacado.life -= ataqueAtual;
            atacado.life = atacado.life < 0 ? 0 : atacado.life;
            log.addMessage(`${atacando.name} causou ${ataqueAtual.toFixed(2)} de dano em ${atacado.name}`);
         }else{
            log.addMessage(`${atacado.name} conseguiu defender....`)
         }

         this.update();
      }
 }

 const log = {

   lista:[],
   addMessage(msg){
      this.lista.push(msg)
      this.render();
   },
   
   render(){
      let logEl = document.querySelector('.log');
      logEl.innerHTML = '';

      for(let i in this.lista){
         logEl.innerHTML += `<li>${this.lista[i]}</li>`
      }
   }
 }