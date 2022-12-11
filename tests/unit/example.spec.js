// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { shallowMount } from '@vue/test-utils'
import BaseHeader from '@/components/ui/BaseHeader.vue'

describe('BaseHeader.vue', () => {
  const wrapper = shallowMount(BaseHeader)
  it('data jest widoczna', () => {
    expect(wrapper.find("h1").text()).toBe("Dzisiaj jest 11/12");
  })
})
