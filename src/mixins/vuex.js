
export default {
  props: ['tag'],
  computed: {
    showPopup () {
      return this.mstates.activeComponent === this.tag
    }
  },
  beforeCreate () {
    let name = this.$parent.namespace || this.$parent.$parent.namespace
    console.log('namespace', name)
    this.mstates = name ? this.$store.state[name] : this.$store.state
    this.mpath = name ? name + '/' : ''
  }
}
