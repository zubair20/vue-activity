export default {
  data(){
    return {
      'utilityName': 'text utility',
      'creator': 'Zubair Akhtar'
    }
  },
  computed:{
    fullName(){
      return this.utilityName +  " " + this.creator
    }
  },
  methods:{
    textutility_capitalize(word) {
      if (word && typeof word === 'string') {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    }
  }
}