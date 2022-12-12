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
import TaskList from '@/components/pages/TaskList.vue'

describe('BaseHeader h1 test', () => {
  const wrapper = shallowMount(BaseHeader);
  const data = new Date();
  const fullDate = data.getDate() + '/' + (data.getMonth() + 1) + "/" + data.getFullYear();


  //false on purpose
  it('czy widoczny jest stary nagłówek', () => {
    expect(wrapper.find("h1").text()).toBe("Dzisiaj jest 12/12");
  });

  it('czy zawiera dzisiejszą datę', () => {
    expect(wrapper.find("h1").text()).toContain(fullDate);
  });

});

describe('New task is added', () => {
  const wrapper = shallowMount(TaskList);
  const testTask = {
    category: "Zdrowie",
    title: "Wizyta u lekarza",
    description: "Zabrać PESEL",
    localization: "ul. Lekarska 6",
    time: "15:16",
  };
  wrapper.vm.addTask(testTask);

  it('task dodano pomyślnie na poczatku tablicy', () => {
    expect(wrapper.vm.myTasks[0]).toEqual(testTask);
  });
}
)
