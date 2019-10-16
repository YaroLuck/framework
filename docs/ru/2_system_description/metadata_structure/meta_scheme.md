#### [Оглавление](/docs/ru/index.md)

### Предыдущая страница: [Шаг 3 Сборка и запуск](/docs/ru/1_system_deployment/step3_building_and_running.md)

# Схема основных типов меты

**Метаданные (Мета)** - совокупность JSON-файлов в полной мере описывающих комплект структур, которыми оперирует приложение, способов отображения данных структур в пользовательском интерфейсе и навигации по ним, а так же файлов конфигурации приложения.   

## Типы файлов меты

1. Мета классов
2. Мета представлений
3. Мета навигации: мета секций навигации, мета узлов навигации
4. Мета отчета
5. Мета админ
6. Мета бизнес-процессов 
7. Геомета 
8. Мета безопасности 

## Структура основных типов меты
![shema](/docs/ru/images/schema.png)

Структуру основных типов меты можно представить следующим образом:

**Мета классов** является основным источником формирования данных в приложении. Мета классов состоит из атрибутов (атрибутивная часть) и параметров самого класса (общая часть). Атрибуты - это объекты массива "properties" общей части, которая содержит поля, имеющие отношение к самой структуре и способам оперирования данными в структуре.  

На основе меты классов задается мета представлений, мета навигации, мета отчетов, мета бизнес-процессов и т.д.  

**Мета представления (класса)** позволяет задавать желаемый состав атрибутов этого класса для отображения на форме, в соответствии с типом формы представления (представление формы списка `list.json`, создания `create.json`, изменения класса `item.json`) и указывать для каждого отдельного атрибута свойства, переопределяемые и (или) дополняемые свойства, задаваемые в мете класса для данного атрибута. 

>Мета представления + Атрибуты класса = Отображение атрибутов на форме

 
**Мета навигации** регулирует расположение элементов в навигационном блоке. Мета навигации разделяется на мету узлов навигации и мету секции навигации. 

## Наименование файлов меты: 


| [**Мета класса**](/docs/ru/2_system_description/metadata_structure/meta_class/meta_class_main.md)                    | [**Мета представлений**](/docs/ru/2_system_description/metadata_structure/meta_view/meta_view_main.md)          | [**Мета навигации**](/docs/ru/2_system_description/metadata_structure/meta_navigation/meta_navigation.md)                                                                                                                                                                |
|:------------------------------|:-------------------------------|:--------------------------------------------- |
| Находится в директории `meta` и состоит из наименования общей части меты класса + `.class.json.`. Например: `adress.class.json`.       |В наименовании директории определяется к какому классу относится представление. Мета представлений располгается в директории `views`, в которой содержатся директории, наименования которых совпадают с первой частью наименований файлов меты классов. Например: `adress@project_name`, где  `adress` относится к классу `adress`.        | Мета секций навигации: состоит из поля `"name" + .section.json` и находится в директории `navigation`. Например: `workflow.section.json`.     

### Следующая страница: [Мета классов - общая часть](/docs/ru/2_system_description/metadata_structure/meta_class/meta_class_main.md)

--------------------------------------------------------------------------  


 #### [Licence](/LICENSE) &ensp;  [Contact us](https://iondv.com/portal/contacts) &ensp;  [English](/docs/en/2_system_description/metadata_structure/meta_scheme.md)   &ensp;
<div><img src="https://mc.iondv.com/watch/local/docs/framework" style="position:absolute; left:-9999px;" height=1 width=1 alt="iondv metrics"></div>         



--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.  
All rights reserved.  
