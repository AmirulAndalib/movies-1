const MODEL_CONFIG = {

  // Узлы. Опции преобразования данных
  nodesProcessing: {

    // Узлы. Опции общего назначения
    commonOptions: {

      /* Отладочный параметр: Показывать порты у узла "Мать ребенка" */
      showMotherPorts: false,
      // showMotherPorts: true,

      /* Параметр: Показывать метки портов */
      showPortLabels: false,
      // showPortLabels: true,

      /* Отладочный параметр: Использовать для узлов только react-компоненты */
      useOnlyReactShape: true,

      /* Отладочный параметр: Использовать для react-компонентов только форму круга */
      useOnlyReactCircle: true,
    },

    // Узлы. Опции для отладочного потомка (id14)
    lastChildOptions: {

      /* Отладочный параметр: Указать значение childrenGroup 2 */
      childrenGroup: 2,

      /* Отладочный параметр: Стилизовать порт для childrenGroup 2 */
      useGroupStyledPort: true,
    }
  },

  // Связи. Опции преобразования данных
  edgesProcessing: {

    // Связи. Опции общего назначения
    commonOptions: {
      /* Параметр: Показывать метки связей */
      showLabels: false
      // showLabels: true
    },

    // Связи. Опции для отладочного потомка (id14)
    lastChildOptions: {
      /* Добавить порт в качестве пля target */
      useTargetPort: true,

      /* Использовать стандартный роутер */
      // useDefaultRouter: true,
      useDefaultRouter: false,
    }
  },

  // Связи. Опции разметки
  edgesMarkup: {

    /* Параметр: Скруглять коннекторы */
    useRondedConnectors: true,

    /* Параметр: Тип конечного маркера */
    targetMarkerType: 'path',
    // targetMarkerType: 'arrow',
    // targetMarkerType: 'rect',
    // targetMarkerType: '',
  }
};

export default MODEL_CONFIG;