using System;

namespace PuertsStaticWrap
{
    public static class System_TimeSpan_Wrap
    {
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                
                if (paramLen == 1)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.BigInt, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetInt64(false);
                        var result = new System.TimeSpan(Arg0);
                        
                        
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.TimeSpan), result);
                    }
                }
                
                if (paramLen == 3)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetInt32(false);
                        var result = new System.TimeSpan(Arg0,Arg1,Arg2);
                        
                        
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.TimeSpan), result);
                    }
                }
                
                if (paramLen == 4)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetInt32(false);
                        var Arg3 = argHelper3.GetInt32(false);
                        var result = new System.TimeSpan(Arg0,Arg1,Arg2,Arg3);
                        
                        
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.TimeSpan), result);
                    }
                }
                
                if (paramLen == 5)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetInt32(false);
                        var Arg3 = argHelper3.GetInt32(false);
                        var Arg4 = argHelper4.GetInt32(false);
                        var result = new System.TimeSpan(Arg0,Arg1,Arg2,Arg3,Arg4);
                        
                        
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.TimeSpan), result);
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to System.TimeSpan constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Add(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var result = obj.Add(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Compare(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var Arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = System.TimeSpan.Compare(Arg0,Arg1);
                        
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_CompareTo(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                if (paramLen == 1)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var result = obj.CompareTo(Arg0);
                        
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false))
                    {
                        
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var result = obj.CompareTo(Arg0);
                        
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to CompareTo");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromDays(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetDouble(false);
                        var result = System.TimeSpan.FromDays(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Duration(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                
                {
                    
                    
                    
                    
                    {
                        
                        var result = obj.Duration();
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Equals(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                if (paramLen == 1)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var result = obj.Equals(Arg0);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false))
                    {
                        
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var result = obj.Equals(Arg0);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Equals");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Equals(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var Arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = System.TimeSpan.Equals(Arg0,Arg1);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetHashCode(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                
                {
                    
                    
                    
                    
                    {
                        
                        var result = obj.GetHashCode();
                        
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromHours(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetDouble(false);
                        var result = System.TimeSpan.FromHours(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromMilliseconds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetDouble(false);
                        var result = System.TimeSpan.FromMilliseconds(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromMinutes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetDouble(false);
                        var result = System.TimeSpan.FromMinutes(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Negate(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                
                {
                    
                    
                    
                    
                    {
                        
                        var result = obj.Negate();
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromSeconds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetDouble(false);
                        var result = System.TimeSpan.FromSeconds(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Subtract(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var result = obj.Subtract(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromTicks(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetInt64(false);
                        var result = System.TimeSpan.FromTicks(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Parse(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                if (paramLen == 1)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var result = System.TimeSpan.Parse(Arg0);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                
                if (paramLen == 2)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<System.IFormatProvider>(false);
                        var result = System.TimeSpan.Parse(Arg0,Arg1);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Parse");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ParseExact(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                if (paramLen == 3)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var result = System.TimeSpan.ParseExact(Arg0,Arg1,Arg2);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(string[]), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<string[]>(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var result = System.TimeSpan.ParseExact(Arg0,Arg1,Arg2);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                
                if (paramLen == 4)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var Arg3 = (System.Globalization.TimeSpanStyles)argHelper3.GetInt32(false);
                        var result = System.TimeSpan.ParseExact(Arg0,Arg1,Arg2,Arg3);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(string[]), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<string[]>(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var Arg3 = (System.Globalization.TimeSpanStyles)argHelper3.GetInt32(false);
                        var result = System.TimeSpan.ParseExact(Arg0,Arg1,Arg2,Arg3);
                        
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ParseExact");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_TryParse(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                if (paramLen == 2)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), true, true))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<System.TimeSpan>(true);
                        var result = System.TimeSpan.TryParse(Arg0,out Arg1);
                        
                        argHelper1.SetByRefValue(Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                
                if (paramLen == 3)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), true, true))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<System.IFormatProvider>(false);
                        var Arg2 = argHelper2.Get<System.TimeSpan>(true);
                        var result = System.TimeSpan.TryParse(Arg0,Arg1,out Arg2);
                        
                        argHelper2.SetByRefValue(Arg2);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TryParse");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_TryParseExact(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                if (paramLen == 4)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), true, true))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var Arg3 = argHelper3.Get<System.TimeSpan>(true);
                        var result = System.TimeSpan.TryParseExact(Arg0,Arg1,Arg2,out Arg3);
                        
                        argHelper3.SetByRefValue(Arg3);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(string[]), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), true, true))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<string[]>(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var Arg3 = argHelper3.Get<System.TimeSpan>(true);
                        var result = System.TimeSpan.TryParseExact(Arg0,Arg1,Arg2,out Arg3);
                        
                        argHelper3.SetByRefValue(Arg3);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                
                if (paramLen == 5)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), true, true))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var Arg3 = (System.Globalization.TimeSpanStyles)argHelper3.GetInt32(false);
                        var Arg4 = argHelper4.Get<System.TimeSpan>(true);
                        var result = System.TimeSpan.TryParseExact(Arg0,Arg1,Arg2,Arg3,out Arg4);
                        
                        argHelper4.SetByRefValue(Arg4);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(string[]), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), true, true))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<string[]>(false);
                        var Arg2 = argHelper2.Get<System.IFormatProvider>(false);
                        var Arg3 = (System.Globalization.TimeSpanStyles)argHelper3.GetInt32(false);
                        var Arg4 = argHelper4.Get<System.TimeSpan>(true);
                        var result = System.TimeSpan.TryParseExact(Arg0,Arg1,Arg2,Arg3,out Arg4);
                        
                        argHelper4.SetByRefValue(Arg4);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TryParseExact");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                
                if (paramLen == 0)
                {
                    
                    
                    
                    
                    {
                        
                        var result = obj.ToString();
                        
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                
                if (paramLen == 1)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var result = obj.ToString(Arg0);
                        
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                
                if (paramLen == 2)
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false))
                    {
                        
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<System.IFormatProvider>(false);
                        var result = obj.ToString(Arg0,Arg1);
                        
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ToString");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Ticks(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Ticks;
                Puerts.PuertsDLL.ReturnBigInt(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Days(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Days;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Hours(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Hours;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Milliseconds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Milliseconds;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Minutes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Minutes;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Seconds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Seconds;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TotalDays(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.TotalDays;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TotalHours(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.TotalHours;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TotalMilliseconds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.TotalMilliseconds;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TotalMinutes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.TotalMinutes;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TotalSeconds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (System.TimeSpan)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.TotalSeconds;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TicksPerMillisecond(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.TicksPerMillisecond;
                Puerts.PuertsDLL.ReturnBigInt(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TicksPerSecond(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.TicksPerSecond;
                Puerts.PuertsDLL.ReturnBigInt(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TicksPerMinute(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.TicksPerMinute;
                Puerts.PuertsDLL.ReturnBigInt(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TicksPerHour(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.TicksPerHour;
                Puerts.PuertsDLL.ReturnBigInt(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TicksPerDay(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.TicksPerDay;
                Puerts.PuertsDLL.ReturnBigInt(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Zero(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.Zero;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_MaxValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.MaxValue;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_MinValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = System.TimeSpan.MinValue;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_UnaryNegation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var result = -arg0;
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Subtraction(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 - arg1;
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_UnaryPlus(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var result = +arg0;
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Addition(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 + arg1;
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Equality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 == arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Inequality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 != arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_LessThan(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 < arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_LessThanOrEqual(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 <= arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_GreaterThan(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 > arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_GreaterThanOrEqual(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    
                    
                    
                    {
                        
                        var arg0 = argHelper0.Get<System.TimeSpan>(false);
                        var arg1 = argHelper1.Get<System.TimeSpan>(false);
                        var result = arg0 >= arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        
        public static Puerts.TypeRegisterInfo GetRegisterInfo()
        {
            return new Puerts.TypeRegisterInfo()
            {
                BlittableCopy = false,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    { new Puerts.MethodKey {Name = "Add", IsStatic = false},  M_Add },
                    { new Puerts.MethodKey {Name = "Compare", IsStatic = true},  F_Compare },
                    { new Puerts.MethodKey {Name = "CompareTo", IsStatic = false},  M_CompareTo },
                    { new Puerts.MethodKey {Name = "FromDays", IsStatic = true},  F_FromDays },
                    { new Puerts.MethodKey {Name = "Duration", IsStatic = false},  M_Duration },
                    { new Puerts.MethodKey {Name = "Equals", IsStatic = false},  M_Equals },
                    { new Puerts.MethodKey {Name = "Equals", IsStatic = true},  F_Equals },
                    { new Puerts.MethodKey {Name = "GetHashCode", IsStatic = false},  M_GetHashCode },
                    { new Puerts.MethodKey {Name = "FromHours", IsStatic = true},  F_FromHours },
                    { new Puerts.MethodKey {Name = "FromMilliseconds", IsStatic = true},  F_FromMilliseconds },
                    { new Puerts.MethodKey {Name = "FromMinutes", IsStatic = true},  F_FromMinutes },
                    { new Puerts.MethodKey {Name = "Negate", IsStatic = false},  M_Negate },
                    { new Puerts.MethodKey {Name = "FromSeconds", IsStatic = true},  F_FromSeconds },
                    { new Puerts.MethodKey {Name = "Subtract", IsStatic = false},  M_Subtract },
                    { new Puerts.MethodKey {Name = "FromTicks", IsStatic = true},  F_FromTicks },
                    { new Puerts.MethodKey {Name = "Parse", IsStatic = true},  F_Parse },
                    { new Puerts.MethodKey {Name = "ParseExact", IsStatic = true},  F_ParseExact },
                    { new Puerts.MethodKey {Name = "TryParse", IsStatic = true},  F_TryParse },
                    { new Puerts.MethodKey {Name = "TryParseExact", IsStatic = true},  F_TryParseExact },
                    { new Puerts.MethodKey {Name = "ToString", IsStatic = false},  M_ToString },
                    { new Puerts.MethodKey {Name = "op_UnaryNegation", IsStatic = true}, O_op_UnaryNegation},
                    { new Puerts.MethodKey {Name = "op_Subtraction", IsStatic = true}, O_op_Subtraction},
                    { new Puerts.MethodKey {Name = "op_UnaryPlus", IsStatic = true}, O_op_UnaryPlus},
                    { new Puerts.MethodKey {Name = "op_Addition", IsStatic = true}, O_op_Addition},
                    { new Puerts.MethodKey {Name = "op_Equality", IsStatic = true}, O_op_Equality},
                    { new Puerts.MethodKey {Name = "op_Inequality", IsStatic = true}, O_op_Inequality},
                    { new Puerts.MethodKey {Name = "op_LessThan", IsStatic = true}, O_op_LessThan},
                    { new Puerts.MethodKey {Name = "op_LessThanOrEqual", IsStatic = true}, O_op_LessThanOrEqual},
                    { new Puerts.MethodKey {Name = "op_GreaterThan", IsStatic = true}, O_op_GreaterThan},
                    { new Puerts.MethodKey {Name = "op_GreaterThanOrEqual", IsStatic = true}, O_op_GreaterThanOrEqual},
                    
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"Ticks", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Ticks, Setter = null} },
                    {"Days", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Days, Setter = null} },
                    {"Hours", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Hours, Setter = null} },
                    {"Milliseconds", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Milliseconds, Setter = null} },
                    {"Minutes", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Minutes, Setter = null} },
                    {"Seconds", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Seconds, Setter = null} },
                    {"TotalDays", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_TotalDays, Setter = null} },
                    {"TotalHours", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_TotalHours, Setter = null} },
                    {"TotalMilliseconds", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_TotalMilliseconds, Setter = null} },
                    {"TotalMinutes", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_TotalMinutes, Setter = null} },
                    {"TotalSeconds", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_TotalSeconds, Setter = null} },
                    {"TicksPerMillisecond", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TicksPerMillisecond, Setter = null} },
                    {"TicksPerSecond", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TicksPerSecond, Setter = null} },
                    {"TicksPerMinute", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TicksPerMinute, Setter = null} },
                    {"TicksPerHour", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TicksPerHour, Setter = null} },
                    {"TicksPerDay", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TicksPerDay, Setter = null} },
                    {"Zero", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_Zero, Setter = null} },
                    {"MaxValue", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_MaxValue, Setter = null} },
                    {"MinValue", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_MinValue, Setter = null} },
                    
                }
            };
        }
        
    }
}