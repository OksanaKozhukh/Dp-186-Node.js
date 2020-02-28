// Export
// Именованный экспорт
export { myFunction }; // экспорт ранее объявленной функции
export const foo = Math.sqrt(2); // экспорт константы


// Дефолтный экспорт
export default function() {} // или 'export default class {}'
// тут не ставится точка с запятой





//Import
// 1 Статическая форма
//1.1 Импорт всего содержимого модуля
import * as myModule from '/modules/my-module.js';

//1.2 Импорт единичного значения из модуля
import {myExport} from '/modules/my-module.js';

//1.3. Импорт нескольких единичных значений
import {foo, bar} from '/modules/my-module.js';

//1.4. Импорт значений с использованием более удобных имен
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';

//1.5 Импорт значения по умолчанию
import myDefault from '/modules/my-module.js';


// 2 Динамическая форма - Ключевое слово import можно использовать как функцию для динамического импорта модулей. Вызов import() возвращает Promise.
import('/modules/my-module.js')
  .then(module => {
    // Делаем что-нибудь с модулем
  })


